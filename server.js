var express = require('express');
var path = require('path');


const PORT = process.port || 3000;



var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// app.use('/', index);

app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


app.listen(3000, function () {
    console.log("Application is running on port "+PORT);
});