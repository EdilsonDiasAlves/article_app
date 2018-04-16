var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Server Running');
}).listen(8081);