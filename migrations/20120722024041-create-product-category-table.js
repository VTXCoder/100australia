var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('product_category', { 		
 		product_id: 'int',
 		category_id: 'int'
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('product_category', callback);
};
