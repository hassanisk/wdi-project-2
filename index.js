const express         = require('express');
const expressLayouts  = require('express-ejs-layouts');
const bodyParser      = require('body-parser');
const mongoose        = require('mongoose');
const session         = require('express-session');
const methodOverride  = require('method-override');
const morgan          = require('morgan');
const User            = require('./models/user');
const flash           = require('express-flash');
const env             = require('./config/env');
const router          = require('./config/routes');
const app             = express();

mongoose.connect(env.db);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({
  secret: process.env.SESSION_SECRET || 'ssh it\'s a secret',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use((req, res, next) => {
  if (!req.session.userId) return next();
  User
  .findById(req.session.userId)
  .exec()
  .then((user) => {
    if(!user) {
      return req.session.regenerate(() => {
        res.redirect('/');
      });
    }
    req.session.userId = user._id;
    res.locals.user = user;
    res.locals.isLoggedIn = true;
    next();
  });
});

app.use(morgan('dev'));
app.use(expressLayouts);
app.use(router);
app.listen(env.port, () => console.log(`Server up and running on port: ${env.port}.`));
