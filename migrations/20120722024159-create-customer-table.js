var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('customer', {
 		customer_id: { type: 'int', primaryKey: true, autoIncrement: true },
      	name: 'string',
 		email: 'string',
 		note: 'text'
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('customer', callback);
};