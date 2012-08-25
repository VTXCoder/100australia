var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('sale', {
 		sale_id: { type: 'int', primaryKey: true, autoIncrement: true },
 		product_id: 'int',
 		discount: 'string',
 		start_date: 'datetime',
 		end_date: 'datetime'
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('sale', callback);
};