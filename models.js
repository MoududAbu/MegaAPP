var db = require( './mongo.js' );

console.log(db.);

function getUsers() {
    return db.collection( 'users' ).find().toArray();
}

function addUsers(user) {
     db.collection( 'users' ).insertOne(user);
}

module.exports = {
    getUsers
};