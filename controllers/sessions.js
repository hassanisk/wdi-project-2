const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
  .create(req.body)
  .then(user => {
    res.redirect('/');
  })
  .catch((err) => res.status(500).end());
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate
};
