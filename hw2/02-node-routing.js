const http = require('http');
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
  const routes = [
    'welcome',
    'redirect',
    'redirected',
    'cache',
    'cookie',
    'other',
  ];

  if (req.method === 'GET' && req.url == '/') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Node Routing Exercise');
    res.end();
  } else if (req.method === 'GET' && req.url == '/welcome') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Welcome to the node routing section of HW2!</h1>');
    res.end();
  } else if (req.method === 'GET' && req.url == '/redirect') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(302, { Location: '/redirected' });
    res.end();
  } else if (req.method === 'GET' && req.url == '/redirected') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>You have been redirected :P</h1>');
    res.end();
  } else if (req.method === 'GET' && req.url == '/redirected') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>You have been redirected :P</h1>');
    res.end();
  } else if (req.method === 'GET' && req.url == '/cache') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Cache-Control': 'max-age=86400',
    });
    res.write('This resource was cached');
    res.end();
  } else if (req.method === 'GET' && req.url == '/cookie') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Set-Cookie': 'hello=world',
    });
    res.write('cookies...yummm');
    res.end();
  } else {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write("404: The page you're looking for does not exist.");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
