var express = require('express')
var app = express()
var fs = require('fs');
var path = require('path')
var numR = require('./num-request.js')
var files = require('./json-files.js')

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(function (req,res, next) {
    numR(req, res, req.originalUrl);
    next();
})

app.use("/public", express.static(path.join(__dirname, 'public')));

app.all('/province/:name', function (req, res) {
    files(req,res);
})

app.get('*',function (req,res) {
    res.writeHead(404, {"Content-Type":"text/html"});
    res.end("<img id='notFound' src='/public/images/404.png' style='width:100%'>");
})


app.listen(8080);