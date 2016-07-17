/**
 * Created by priom on 2016-07-16.
 */

const http = require('http');
const host = '127.0.0.1';
const port = '3001';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome, I\'m Priom!');
});

server.listen(port, host, () => {
    console.log("Server running at " + host + ":" + port);
});