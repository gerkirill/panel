var express = require('express'),
    xml2js = require('xml2js'),
    http = require("http")
;

var app = express();
app.use(express.static('public_html'));

app.get('/seasonvar', function(req, res) {
    http.get("http://seasonvar.ru/rss.php", function(resp) {
        var data = '';
        resp.setEncoding('utf8');
        resp.on('data', function(chunk){
            data += chunk;
        });
        resp.on('end', function(){
            var parser = new xml2js.Parser();
            parser.parseString(data, function (err, result) {
                res.send(result.rss.channel[0].item);
            });
        });
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});