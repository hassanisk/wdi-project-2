const express = require('express');
const router  = express.Router();
const statics       = require('../controllers/statics');
const sessions      = require('../controllers/sessions');
const registrations = require('../controllers/registrations');
const movies = require('../controllers/movies');


function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in.');
      res.redirect('/login');
    });
  }

  return next();
}
router.route('/')
.get(statics.index);
router.route('/movie')
.get(statics.movie);

router.route('/movies')
.get(movies.index)
.post(secureRoute, movies.create);

router.route('/movies/new')
.get(secureRoute, movies.new);

router.route('/movies/:id')
.get(secureRoute, movies.show)
.put(secureRoute, movies.update)
.delete(secureRoute, movies.delete);

router.route('/movies/:id/edit')
.get(secureRoute, movies.edit);


router.route('/register')
.get(registrations.new)
.post(registrations.create);

router.route('/login')
.get(sessions.new)
.post(sessions.create);

router.route('/logout')
.get(sessions.delete);

router.get('/', (req, res) => res.render('statics/index'));

module.exports = router;
