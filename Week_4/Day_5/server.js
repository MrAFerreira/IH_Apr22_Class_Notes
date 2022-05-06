const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const fakeMiddleware = (req, res, next) => {
  req.bananas = 'Created some bananas on the request';
  console.log('Fake middleware was called');
  next();
};

app.set('views'.__dirname + '/views');
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(fakeMiddleware);

app.get('/', (req, res, next) => {
  res.render('index');
});

//params
//You can have more than one param per route

app.get('/pokemon/:name', (req, res, next) => {
  console.log(req.params);
});

// Query String

app.get('/search', (req, res, next) => {
  const { city, 'start-date': startDate, 'end-date': endDate } = req.query;

  console.log(city, startDate, endDate);
});

app.get('/login', (req, res, next) => {
  res.render('login');
});

app.post('/login', (req, res, next) => {
  console.log(req.body);
});

app.get('/test', (req, res, next) => {
  console.log(process.env.SPOTIFY_API_KEY);
});

app.listen(3000, () => console.log('Listening on port 3000'));
