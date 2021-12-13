'use strict';
var http = require('http');
var port = process.env.PORT || 1335;
const imgURL = "https://aliassignment.oss-ap-southeast-3.aliyuncs.com/download.png";

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello Alibaba Cloud</h1><br>');
    res.end("<img src = \"" + imgURL + "\"/>");
    //res.end('Hello World\n' + res.connection.localPort);
}).listen(port);
