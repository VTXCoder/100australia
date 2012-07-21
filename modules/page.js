var content = require('./content').getContent();
var shopping = require('./shopping').getShopping();

exports.RenderHome=function(req,res) {
	var c={content:content,session:req.session};
    res.render('page/home.ejs', c);
}

exports.RenderAbout=function(req,res) {
	var c={content:content,session:req.session};
    res.render('page/about.ejs', c);
} 

exports.RenderProductList=function(req,res) {
	var c={content:content,session:req.session};
    res.render('page/productlist.ejs', c);
} 