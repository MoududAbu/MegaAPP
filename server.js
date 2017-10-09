const express = require('express');
let path = require('path');

const PORT = process.port || 3000;
const app = express();
const bodyParser = require('body-parser');
const db = require('./mongo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

app.get('/addUser', function (req, res, next) {
    res.render('adduser', {title: 'Express'});
});

app.get('/users', db.getUsers);
app.post('/addUser', db.addUsers);


app.listen(3000, function () {
    console.log("Application is running on port " + PORT);
});


