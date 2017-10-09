const express = require('express');
var path = require('path');


const PORT = process.port || 3000;
let users  = [];
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

app.post('/addUser', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

app.listen(3000, function () {
    console.log("Application is running on port "+PORT);
});