var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('supplier', {
 		supplier_id: { type: 'int', primaryKey: true, autoIncrement: true },
      	name: 'string',
 		description: 'text',
 		contact: 'string',
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('supplier', callback);
};