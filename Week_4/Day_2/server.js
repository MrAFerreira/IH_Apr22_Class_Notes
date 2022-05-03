const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello world');
    res.end();
  } else if (req.url === '/about') {
    res.write('My name is André');
    res.end();
  } else {
    res.statusCode = 404;
    res.write('404 page');
    res.end();
  }
});

server.listen(3000);
