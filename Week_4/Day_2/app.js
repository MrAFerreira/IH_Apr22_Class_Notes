//requiring the package
const express = require('express');

//making the package functions and methods available on the app variable
const app = express();

// Makes the app use the public folder as the storage for static files (images/html/css/...)
app.use(express.static('public'));

app.get('/home', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/home.html');
});

app.get('/cat', (req, res, next) => {
  console.log('server reached');
  res.sendFile(__dirname + '/public/views/cat-page.html');
});

app.listen(3000, () => console.log('Server running on port 3000'));
