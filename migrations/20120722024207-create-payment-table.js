var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('payment', {
 		payment_id: { type: 'int', primaryKey: true, autoIncrement: true },
      	date: 'datetime',
 		amount: 'string',
 		method: 'string',
 		purchase_id: 'int',
 		transaction_detail: 'string',
 		status: 'string'
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('payment', callback);
};
