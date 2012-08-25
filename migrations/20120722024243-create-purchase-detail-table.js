var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('purchase_detail', {
      	purchase_id: 'int',
 		product_id: 'int',
 		qty: 'int'
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('purchase_detail', callback);
};
