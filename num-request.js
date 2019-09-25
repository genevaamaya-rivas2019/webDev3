module.exports = function (req, res, url) {
    const fs = require('fs');
    fs.appendFile('request-url.txt', url+',', function (err) {
        if(err){
            throw err;
        }else{
            fs.readFile('request-url.txt', function (err, data) {
                if (err) console.log(err);
                console.log('data', data)
                console.log(data.toString())
                var dataText = data.toString();
                var splittedData = dataText.split(",");
                console.log(splittedData, splittedData.length);
                fs.writeFile('num-request.txt', splittedData.length - 1, function (err) {
                    if (err) console.log(err);
                    console.log(splittedData.length - 1)
                })
        
            })
        }
    })
    
}