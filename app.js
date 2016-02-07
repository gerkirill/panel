var express = require('express')
  , xml2js = require('xml2js')
  , request = require('request')
  , moment = require('moment')
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
// type is either 'bid' or 'ask'
app.get('/banker-ua/:type', function(req, res) {
    var endDate = moment().format('DD.MM.YYYY');
    var startDate = moment().subtract(3, 'days').format('DD.MM.YYYY');
    request(
        'http://banker.ua/marketindex/currency_graph_ib/'+startDate+'/'+endDate+'/USD/' + req.params.type,
        function (error, response, body) {
        if (error) return;
        res.send(body);
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});