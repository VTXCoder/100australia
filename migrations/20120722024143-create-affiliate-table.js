var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('affiliate', {
 		affiliate_id: { type: 'int', primaryKey: true, autoIncrement: true },
      	name: 'string',
 		email: 'string',
 		contact: 'string',
 		description: 'string',
 		password: 'string'
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('affiliate', callback);
};
