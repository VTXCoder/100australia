var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('price', {
 		price_id: { type: 'int', primaryKey: true, autoIncrement: true },
      	price: 'string',
 		price_date: 'datetime',
 		status: 'string',
    }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('price', callback);
};
