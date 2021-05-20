const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/bio', (request, response, next) => {
  response.sendFile(__dirname + '/views/bio.html');
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});