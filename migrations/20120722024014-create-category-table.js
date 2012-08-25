var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('category', {
 		category_id: { type: 'int', primaryKey: true, autoIncrement: true },
      	name: 'string',
 		parent_category_id: 'string' 
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('category', callback);
};
