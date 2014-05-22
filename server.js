var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hehehe");
  response.end();
}).listen(process.env.PORT || 8080);
console.log('Server listening on port 8080');