const http = require('http');
const hostname = `127.0.0.1`;
const port = 3000;

const server = http.createServer();

var HttpStatus = require('http-status-codes');

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(`Start time: ${new Date()}`);
});

server.on('request', (req, res) => {
    
    res.statusCode = 400;

    if(req.url === '/favicon.ico') {
        res.setHeader('Content-Type', 'text/plain');
        res.end();
        return;
    }
    
    if (req.url === '/') {
        res.statusCode = 500;
        res.end('Error');
        return;
    }
});
