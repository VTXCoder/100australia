var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('brand', {
 		brand_id: { type: 'int', primaryKey: true, autoIncrement: true },
      	name: 'string',
 		description: 'text',
 		image: 'string',
 		website: 'string',
 		supplier_id: 'int',
 		note: 'string' 
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('brand', callback);
};