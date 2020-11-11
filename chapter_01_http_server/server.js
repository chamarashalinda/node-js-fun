import {http} from 'http';

const server = http.createServer((req, res) => {
  console.log('request made');
})

server.listen(3000, 'localhost', () => {
  console.log('Listing to port 3000 in localhost');
})
