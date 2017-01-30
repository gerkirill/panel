const express = require('express');
const proxy = require('./proxy.middleware.js');
const debug = require('debug')('app:server');

const app = express();

// CORS workaround
// e.g. http://localhost:3000/api/proxy/https://google.com will send request to
// https://google.com.
app.use('/api/proxy/*', proxy());
app.use(express.static('../fe'));

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    debug('Server listening at http://%s:%s', host, port);
});
