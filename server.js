'use strict';
var http = require('http');
var port = process.env.PORT || 1335;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Alibaba Cloud\n');
    res.end('Hello World\n' + res.connection.localPort);
}).listen(port);
