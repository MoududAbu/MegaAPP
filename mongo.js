
const MongoClient = require( 'mongodb' ).MongoClient;

var _db;

module.exports = {

    connectToServer: function( callback ) {
        MongoClient.connect( "mongodb://localhost:27017/mega_app", function( err, db ) {
            _db = db;
            return callback( err );
        } );
    },

    getDb: function() {
        return _db;
    }
};







