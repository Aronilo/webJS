const { table } = require('console');
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000


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

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if(req.url === '/favicon.ico') {
        res.setHeader('Content-Type', 'text/plain')
        res.end()
        return;
    }
    console.log(req.url);
    tablerRows.push(`${requests}`, `${req.url}`, `${req.method}`, `${req.url}`);
    if(req.url === '/comments'){
        if(req.method === 'GET'){
            res.setHeader('Content-Type', 'application/json')
            res.end( JSON.stringify(comments) )
            }
            else if (req.method === 'POST'){
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    comments.push(body);
                    console.table(comments);
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('ok');
                });
            }
    }
    else if(req.url === '/stats'){
        if (req.method === 'GET'){
            res.setHeader('Content-Type', 'text/html')
            res.end( generateTable(tablerRows) )
        }
        else if (req.method === 'POST'){
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                comments.push(body);
                console.table(comments);
                res.setHeader('Content-Type', 'text/plain');
                res.end('ok');
            });
        }
    }
    else if (req.url === '/'){
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello world\n')
    }
    else{
        statusCode = 400;
        res.setHeader('Content-Type', 'text/plain')
        res.end('400 Bad Request\n')
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
    console.log(`Start time: ${new Date()}`)
});