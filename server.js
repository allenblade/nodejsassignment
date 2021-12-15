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
    } else if (req.url === '/.well-known/acme-challenge/VofYdRruOJCNSmjxEN2mORBryRGU-nkzbhmpVxsjozA') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('VofYdRruOJCNSmjxEN2mORBryRGU-nkzbhmpVxsjozA.LZC-M2u8avSxuY8ofGDgP9qvUZkO4IrBQeEkTXpa3x4');
    } else if (req.url === '/.well-known/acme-challenge/IUiFm-BUkKhzAw-kErD9UZN6WFbN_yU--oqtFFkUCXQ') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('IUiFm-BUkKhzAw-kErD9UZN6WFbN_yU--oqtFFkUCXQ.LZC-M2u8avSxuY8ofGDgP9qvUZkO4IrBQeEkTXpa3x4');
    }
}).listen(port);
