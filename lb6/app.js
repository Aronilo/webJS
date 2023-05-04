const express = require('express'); 
const { log } = require('console');
// const http = require('http')
const route = require('./route')
const path = require('path')
const mid = require('./midl')
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
app.use(helmet());
app.use(morgan('dev'));

const hostname = '127.0.0.1'
const port = 3000




app.listen(port, hostname, () => console.log('Example app listening on port 3000!'));

app.use(express.json())



app.use(express.static('public'));

app.use('/v1', route);

app.use(mid.badRequest)

