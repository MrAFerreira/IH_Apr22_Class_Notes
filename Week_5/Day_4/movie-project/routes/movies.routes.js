const router = require('express').Router();
const Movie = require('../models/Movie.model');
const fileUploader = require('../config/cloudinary.config');

router.get('/list', (req, res, next) => {
  Movie.find()
    .then((movies) => res.render('movies/movie-list', { movies }))
    .catch((err) => next(err));
});

router.get('/create', (req, res, next) => {
  res.render('movies/movie-create');
});

router.post('/create', fileUploader.single('movie-image'), (req, res, next) => {
  const { title, description } = req.body;

  if (req.file) {
    Movie.create({ title, description, imageUrl: req.file.path })
      .then(() => res.redirect('/movies/list'))
      .catch((err) => next(err));
  } else {
    Movie.create({ title, description })
      .then(() => res.redirect('/movies/list'))
      .catch((err) => next(err));
  }
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => res.render('movies/movie-edit', movie))
    .catch((err) => next(err));
});

router.post('/:id/edit', fileUploader.single('movie-image'), (req, res, next) => {
  //req.query comes from GET forms
  //"variable" in the url path
  const { id } = req.params;
  //Always comes with a POST form
  const { title, description } = req.body;
  //req.file only exists if there's a file on thje form and the user uploaded something
  console.log(req.file);

  if (req.file) {
    Movie.findByIdAndUpdate(id, { title, description, imageUrl: req.file.path })
      .then(() => res.redirect('/movies/list'))
      .catch((err) => next(err));
  } else {
    Movie.findByIdAndUpdate(id, { title, description })
      .then(() => res.redirect('/movies/list'))
      .catch((err) => next(err));
  }
});

module.exports = router;
