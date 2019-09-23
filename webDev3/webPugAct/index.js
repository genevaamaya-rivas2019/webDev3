var express = require('express')
var app = express()
var fs = require('fs');
var path = require('path')
var numR = require('./numRequest.js')
app.set('view engine', 'pug');
app.set('views', 'views');
app.use("/public", express.static(path.join(__dirname, 'public')));

app.use(function (req,res, next) {
    numR(req,res);
    next();
})

app.all('/province/:name', function (req, res) {
    var filename = req.params.name + ".json";
    fs.readFile("./jsonFiles/" + filename, function (err, data) {
        if (err) throw err;
        var info = JSON.parse(data);
        res.render('index', info)
    });
})

app.get('*',function (req,res) {
    res.writeHead(404, {"Content-Type":"text/html"});
    res.end("<img src='https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png' style='height=auto;width=100%;'>");
})


app.listen(8080);