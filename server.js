const express = require('express');
var path = require('path');


const PORT = process.port || 3000;
let users  = [];
const app = express();
let dbIn;

var mongodb= require('mongodb');
var MongoClient= mongodb.MongoClient;

//const mongoUtil = require( './mongo.js' );


//var models = require('./models.js');

var url = 'mongodb://localhost:27017/test';


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

app.get('/users', function(req, res, next) {

    dbIn.collection('users').find().toArray(function (err, results) {
        res.render('users', { title: 'Express', users : results  });


    });




});

app.post('/addUser', function(req, res, next) {

});


MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server.");
    dbIn = db;
    app.listen(3000, function () {
        console.log("Application is running on port "+PORT);
    });
});


