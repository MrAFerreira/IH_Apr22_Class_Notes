const router = require('express').Router();

const ApiService = require('../services/api.service');

const api = new ApiService();

router.get('/movie-characters', (req, res, next) => {
  api
    .getAllCharacters()
    .then((response) => res.render('pages/characters-list', { characters: response.data }));
});

router.get('/movie-characters/create', (req, res, next) => {
  res.render('pages/new-character-form');
});

router.post('/movie-characters/create', (req, res, next) => {
  const { name, occupation, weapon } = req.body;

  api.createCharacter({ name, occupation, weapon }).then(() => {
    res.redirect('/movie-characters');
  });
});

router.get('/movie-characters/edit/:id', (req, res, next) => {
  const { id } = req.params;
  api
    .getOneCharacter(id)
    .then((response) => {
      console.log(response.data);
      res.render('pages/edit-character-form', { character: response.data });
    })
    .catch((err) => next(err));
});

router.post('/movie-characters/edit/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, weapon } = req.body;

  api
    .editCharacter(id, { name, occupation, weapon })
    .then(() => {
      res.redirect('/movie-characters');
    })
    .catch((err) => next(err));
});

router.get('/movie-characters/delete/:id', (req, res, next) => {
  const { id } = req.params;
  api.deleteCharacter(id).then(() => res.redirect('/movie-characters'));
});

module.exports = router;
