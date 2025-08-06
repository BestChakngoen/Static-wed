let http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('Hellp World');
}).listen(9000);