'use strict';
var http = require('http');
var port = process.env.PORT || 1335;
const imgURL = "https://aliassignment.oss-ap-southeast-3.aliyuncs.com/download.png";
const path = require('path');


http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello Alibaba Cloud</h1><br>');
        res.end("<img src = \"" + imgURL + "\"/>");
        //res.end('Hello World\n' + res.connection.localPort);
    } else if (req.url === '/verfication.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('verify_a68b3979b7e74dacc6f9c6c018a8dca7');
    } else if (req.url === '/.well-known/acme-challenge/3OlmfvpXc7r-84SZVG2jbvwyxkuypPf1lc-iJ4mI538') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('3OlmfvpXc7r-84SZVG2jbvwyxkuypPf1lc-iJ4mI538.QXuGpB2x2EdxzIjMDL38qPvhWt4upMG5UueH6gwQreo');
    } else if (req.url === '/.well-known/acme-challenge/WPRf5JNxnb-Qu_dfDRjV9464XZ9wbZYCgcc9zh83cJI') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('WPRf5JNxnb-Qu_dfDRjV9464XZ9wbZYCgcc9zh83cJI.QXuGpB2x2EdxzIjMDL38qPvhWt4upMG5UueH6gwQreo');
    }
}).listen(port);
