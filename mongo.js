let path = require('path');
let db;
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/mega_app';


function reconnect(cb) {
    MongoClient.connect(url, function (err, database) {
        console.log("Connected correctly to server.");
        db = database;
        cb();
    });
}

function getUsers(req, res, next) {
    if (!db) {
        reconnect(function () {
            getData(db, res);
        })
    } else {
        getData(db, res);
    }

}

function addUsers(req, res, next) {
    if (!db) {
        reconnect(function () {
            addData(db, req, res);
        })
    }
    else {
        addData(db, req, res)
    }

}

function addData(db, req,  res) {

    db.collection('users').insertOne({name: req.body.name}, function (err,results) {
        res.redirect('/users')
    })
}

function getData(db, res) {

    db.collection('users').find().toArray(function (err, results) {
        console.log(results);
        res.render("users", {users: results})
    })

}


module.exports = {
    getUsers,
    addUsers
};