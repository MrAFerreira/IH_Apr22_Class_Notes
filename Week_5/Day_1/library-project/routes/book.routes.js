const router = require('express').Router();
const Book = require('../models/Book.model');

router.get('/books', (req, res, next) => {
  Book.find({})
    .then((books) => {
      res.render('books/book-list', { books });
    })
    .catch((err) => next(err));
});

//Create route - above the details route so that /create isn't caught as an :id param
router.get('/books/create', (req, res, next) => {
  res.render('books/book-create');
});

router.post('/books/create', (req, res, next) => {
  const { title, author, description, rating } = req.body;

  Book.create({ title, author, description, rating })
    .then(() => res.redirect('/books'))
    .catch((err) => next(err));
});

//Update route

router.get('/books/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Book.findById(id)
    .then((book) => {
      res.render('books/book-edit', book);
    })
    .catch((err) => next(err));
});

router.post('/books/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { title, author, description, rating } = req.body;

  Book.findByIdAndUpdate(id, { title, author, description, rating })
    .then((book) => res.redirect(`/books/${book._id}`))
    .catch((err) => next(err));
});

router.post('/books/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Book.findByIdAndRemove(id)
    .then(() => res.redirect('/books'))
    .catch((err) => next(err));
});
//Details route - since it requires an id we should be careful with the order of the routes
router.get('/books/:id', (req, res, next) => {
  const { id } = req.params;
  Book.findById(id)
    .then((book) => {
      res.render('books/book-details', book);
    })
    .catch((err) => next(err));
});

module.exports = router;
