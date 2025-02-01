const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle the request
    if (req.url === '/') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World!');
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
}).on('error', err => {
  console.error('Server failed to start:', err);
});