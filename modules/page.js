var content = require('./content');
var shopping = require('./shopping').getShopping();


exports.RenderHome=function(req,res) {
	var c={page:'home',content:content.getContent(req.session.language),session:req.session};	
    res.render('page/home.ejs', c);
}


exports.RenderProductList=function(page,req,res) {
	var c={page:page,content:content.getContent(req.session.language),session:req.session};
    res.render('page/products.ejs', c);
} 

