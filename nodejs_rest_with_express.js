// ROUTING WITH FRAMEWORK USING EXPRESS IN NODEJS

// For GET request use app.get() method:

var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello Sir')
})

// For POST request use app.post() method:

var express = require('express')
var app = express()

app.post('/', function(req, res) {
    res.send('Hello Sir')
})

// For handling all HTTP methods (i.e. GET, POST, PUT, DELETE etc.) use app.all() method:

var express = require('express')
var app = express()

app.all('/', function(req, res) {
    console.log('Hello Sir')
    next()   // Pass the control to the next handler
})

// Example 1:

var express = require("express");
var app = express();
var port = process.env.port || 5555

app.listen(port, () => {
 console.log("Server running on port " + port);
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });