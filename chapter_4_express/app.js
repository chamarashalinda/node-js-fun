const express =  require('express');

//express app
const app = express();

// lisnt for requests
app.listen(3000);

app.get('/', (request, response) => {
  // response.send('<h1>Hello World</h1>');
  response.sendfile('./views/index.html', {root: __dirname})
});

app.get('/about', (request, response) => {
  // response.send('<h1>Hello World</h1>');
  response.sendfile('./views/about.html', {root: __dirname})
});

// redirect 301
app.get('/about-me', (request, response) => {
  response.redirect('/about')
});

// default route for 404, If any route not match with url this will excecute
app.use((request, response) => {
  response.status(404).sendfile('./views/404.html', {root: __dirname})
})

