const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  console.log(request.url, request.method);

  // set header content type
  response.setHeader('Content-Type', 'text/html');

  let path = './views/';
  response.statusCode = 200;

  switch(request.url){
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      response.statusCode = 404;
      break;
  }

  // read view from html file
  fs.readFile(path, (err, data) => {
    if(err){
      // console.log(error);
      response.statusCode = 500;
      response.end();
    }else{
      response.end(data)
    }
  })
})

server.listen(3000, 'localhost', () => {
  console.log('Listing to port 3000 in localhost');
})
