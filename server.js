var app = require('./app').init(4000);

var session = require('./modules/session');
var language = require('./modules/language');
var page = require('./modules/page');

// Get the top level product categories

var database = require('./modules/database');

database.getCategories(null,function(err,data) {
	if (err) console.log(err); else {
		global.topCategories=data.rows;
	}
});


// Session Preparation
app.get('/*',function(req,res,next) {
	
	session.initialise(req,res);
	language.setLanguage(req,res);

	next();
});

// Home
app.get('/', function(req,res) {
	page.RenderHome(req,res);
});

app.get('/home', function(req,res) {
	page.RenderHome(req,res);
});


/* langauge specific routing 
app.get('/en', function(req,res) {
	language.setLanguage(req,res,"en");
    page.RenderHome(req,res);
});

app.get('/zh-cn', function(req,res) {
	language.setLanguage(req,res,"cn");
   	page.RenderHome(req,res);
});

app.get('/zh-tw', function(req,res) {
	language.setLanguage(req,res,"tw");
   	page.RenderHome(req,res);
});
*/

app.get('/new', function(req,res) {
    page.RenderProductList('new',req,res);
});


app.get('/contact', function(req,res) {
    page.RenderHome(req,res);
});


app.get('/*', function(req, res){
    page.RenderHome(req,res);
});