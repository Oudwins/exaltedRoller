const express = require('express');
const morgan = require('morgan');
const http = require('http');
const routers = require('./routes');

const app = express();

// !APPLICATION WIDE MIDDLEWARE
//log incoming requests
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// access sent json on req.body
app.use(express.json());

// !ROUTERS
Object.values(routers).forEach((el) => app.use(el.resourceURL, el.router));

module.exports = http.createServer(app);
