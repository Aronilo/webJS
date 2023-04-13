const express = require('express')
const router = express.Router()

let comments = ["Комент 1", "Комент 2", "Комент 3" ]

let requests;

let tablerRows = [];

tablerRows.push(`num`, `url`, `method`, `URL`);

function generateTable(array) {
    let table = '<table border="1" width="100%">';
    for (let i = 0; i < array.length; i++) {
        table += '<tr>';
        table += '<td>' + array[i] + '</td>';
        table += '</tr>';
    }
    table += '</table>';
    return table;
}

router.get('/favicon.ico', (req, res) => {
    res.end()
})

router.use((req, res, next) => {
    tablerRows.push(`${requests}`, `${req.url}`, `${req.method}`, `${req.url}`);
    next()
})

router.post('/comments', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        comments.push(body);
        console.table(comments);
        res.setHeader('Content-Type', 'application/json')
        res.end( JSON.stringify(comments))
    });
})

router.get('/stats', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end( generateTable(tablerRows) )
})

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello world\n')
})

router.use((req, res) => {
    res.statusCode = 400
    res.end("Bad request")
})

module.exports = router;