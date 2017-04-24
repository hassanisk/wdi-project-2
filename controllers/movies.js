const Movie = require('../models/movie');

function moviesIndex(req, res) {
  Movie
    .find()
    .exec()
    .then(movies => {
      return res.render('movies/movies', { movies });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}
function moviesShow(req, res) {
  Movie
    .findById(req.params.id)
    .exec()
    .then(movie => {
      if (!movie) {
        return res.render('error', { error: 'No movie found.' });
      }
      return res.render('movies/show', { movie });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}
function moviesNew(req, res) {
  return res.render('movies/new');
}

function moviesCreate(req, res) {
  Movie
    .create(req.body)
    .then(movie => {
      if (!movie) return res.render('error', { error: 'No movie was created!' });
      return res.redirect('/movies');
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}



function moviesEdit(req, res) {
  Movie
    .findById(req.params.id)
    .exec()
    .then(movie => {
      if (!movie) {
        return res.render('error', { error: 'No movie found.' });
      }
      return res.render('movies/edit', { movie });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function moviesUpdate(req, res) {
  Movie
    .findById(req.params.id)
    .exec()
    .then(movie => {
      if (!movie) {
        return res.render('error', { error: 'No movie found.' });
      }
      for (const field in req.body) {
        movie[field] = req.body[field];
      }
      return movie.save();
    })
    .then(movie => {
      if (!movie) {
        return res.render('error', { error: 'Something went wrong during the update.' });
      }
      return res.render('movies/show', { movie });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}
function moviesDelete(req, res) {
  Movie
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return res.redirect('/movies');
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}
module.exports = {
  index: moviesIndex,
  show: moviesShow,
  new: moviesNew,
  create: moviesCreate,
  edit: moviesEdit,
  update: moviesUpdate,
  delete: moviesDelete
};
