var express = require('express')
  , xml2js = require('xml2js')
  , request = require('request')
;

var app = express();
app.use(express.static('public_html'));

app.get('/seasonvar', function(req, res) {
    request('http://seasonvar.ru/rss.php', function (error, response, body) {
        if (error) return;
        var parser = new xml2js.Parser();
        parser.parseString(body, function (err, result) {
            res.send(result.rss.channel[0].item);
        });
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});