const User = require('../models/user');

function staticsIndex(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/index', { users }));
}

function staticsmMovie(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/movie', { users }));
}

function staticsSearch(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/search', { users }));
}

module.exports = {
  index: staticsIndex,
  movie: staticsmMovie,
  search: staticsSearch
};
