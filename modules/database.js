
var pg = require('pg'); 



var getCategories=function(parent_category_id,cb) {
	pg.connect(global.conString, function(err, client) {
		if (err) return cb(err);
		client.query("select c.category_id, c.name from category c join sub_category sc on c.category_id =sc.category_id where (sc.parent_category_id = $1 or $1 is null) order by name",[parent_category_id], function(err, result) {
			if (err) return cb(err);
			if (result.rows.length) return cb(null, result); 
			return cb();
		});
	});
}

exports.getCategories=getCategories; 