const express = require('express')
const path = require('path')
var compression = require('compression')
const http = require('http')
const port = 8080
const app = express()

app.use(compression())

// Place your build in this directory
app.use(express.static(path.join(__dirname, 'dist/walletscan')))


// Use to avoid cross origin block
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,Content-Type,x-auth-user,x-amz-meta-fieldname,x-auth-token,brand-folder"
  );
  next();
});

// Serve your api here
const endpoints = require('./src/index')
endpoints(app)

// Serve your front-end application here
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/walletscan', 'index.html'))
})

// Starting both http & https servers
const server = http.createServer(app)

server.listen(port, () => {
    console.log('HTTP Server running on port ' + port)
});