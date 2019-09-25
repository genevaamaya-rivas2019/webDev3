module.exports = function (req, res) {
    const fs = require('fs');
    var filename = req.params.name + ".json";
    fs.readFile("./json-files/" + filename, function (err, data) {
        if (err) throw err;
        var info = JSON.parse(data);
        res.render('index', info)
    });
}