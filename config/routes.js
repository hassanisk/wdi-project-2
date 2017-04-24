const express = require('express');
const router  = express.Router();
// const sessions      = require('../controllers/sessions');
const registrations = require('../controllers/registrations');
const movies = require('../controllers/movies');


router.route('/movies')
.get(movies.index)
.post(movies.create);
router.route('/movies/new')
.get(movies.new);
router.route('/movies/:id')
.get(movies.show)
.put(movies.update);
router.route('/movies/:id/edit')
.get(movies.edit);
router.route('/movies/:id')
.delete(movies.delete);
router.route('/register')
.get(registrations.new)
.post(registrations.create);



router.get('/', (req, res) => res.render('statics/home'));

module.exports = router;
