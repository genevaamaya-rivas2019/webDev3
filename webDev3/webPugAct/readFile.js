var fs = require('fs');
var path = require('path');
exports.read = function (filename) {
    fs.readFile("jsonFiles/" + filename, function (err, data) {
        if (err) throw err;
        let info = JSON.parse(data);
        return info;
    });
};