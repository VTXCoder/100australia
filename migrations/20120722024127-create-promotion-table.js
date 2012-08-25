var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('promotion', {
 		promotion_id: { type: 'int', primaryKey: true, autoIncrement: true },
      	promotion_code: 'string',
 		discount: 'string',
 		description: 'text',
 		affiliate_id: 'int',
 		commission: 'string',
 		start_date: 'datetime',
 		end_date: 'datetime',
 		note: 'string'

    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('promotion', callback);
};
