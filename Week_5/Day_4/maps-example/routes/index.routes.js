const router = require('express').Router();
const Place = require('../models/Place.model');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
    .then((places) => res.render('index', { places }))
    .catch((err) => next(err));
});

router.post('/places/create', (req, res, next) => {
  const { name, description, latitude, longitude } = req.body;

  Place.create({
    name,
    description,
    location: {
      type: 'Point',
      coordinates: [longitude, latitude],
    },
  })
    .then(() => res.redirect('/'))
    .catch((err) => next(err));
});

module.exports = router;
