var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('purchase', {
 		purchase_id: { type: 'int', primaryKey: true, autoIncrement: true },
 		customer_id: 'int',
 		shipping_address: 'string',
 		shipping_note: 'string',
 		amount: 'string',
 		promotion_code: 'string',
      	status: 'string'
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('purchase', callback);
};