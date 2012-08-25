var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('maillist', {
      	email: 'string',
 		date_joined: 'datetime',
 		status: 'string'
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('maillist', callback);
};
