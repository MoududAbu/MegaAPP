const express = require('express');
let path = require('path');
let dbInstance;

const PORT = process.port || 3000;
const app = express();
const mongodb= require('mongodb');
const MongoClient= mongodb.MongoClient;
const url = 'mongodb://localhost:27017/mega_app';
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

app.get('/addUser', function(req, res, next) {
    res.render('adduser', { title: 'Express' });
});

app.get('/users', function(req, res, next) {
    dbInstance.collection('users').find().toArray(function (err, results) {
        res.render('users', { title: 'Express', users : results  });
    });
});

app.post('/addUser', function(req, res, next) {
    console.log(req.body);
    dbInstance.collection('users').insertOne({name: req.body.name})
    res.sendStatus(200);
});

MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server.");
    dbInstance = db;
    app.listen(3000, function () {
        console.log("Application is running on port "+PORT);
    });
});


