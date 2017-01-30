const request = require('request');

module.exports = function proxyMiddleware() {
    return function(req, res) {
        const matches = req.originalUrl.match(/(\/)(http(s)?:.*$)/);
        if (!matches) throw new Error('proxy error: no target URL provided');
        const destinationUrl = matches[2];
        req.pipe(request(destinationUrl)).pipe(res);
    }
}
