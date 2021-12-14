'use strict';
var http = require('http');
var port = process.env.PORT || 1335;
const imgURL = "https://aliassignment.oss-ap-southeast-3.aliyuncs.com/download.png";
const path = require('path');


http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('aWgYOlmQyavsmWpxSdNeEnUUK9aka6XcwTXY_xhl2W0.QXuGpB2x2EdxzIjMDL38qPvhWt4upMG5UueH6gwQreo');
        //res.write('<h1>Hello Alibaba Cloud</h1><br>');
        //res.end("<img src = \"" + imgURL + "\"/>");
        //res.end('Hello World\n' + res.connection.localPort);
    } else if (req.url === '/verfication.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('verify_a68b3979b7e74dacc6f9c6c018a8dca7');
    }
}).listen(port);
