console.log("Hello testing 1 ...");

const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('this is created server at port 8080 !');
  res.end();
}).listen(8080);