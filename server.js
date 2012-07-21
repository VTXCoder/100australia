var app = require('./app').init(4000);

var session = require('./modules/session');
var language = require('./modules/language');
var page = require('./modules/page');

// Session Preparation
app.get('/*',function(req,res,next) {
	session.initialise(req,res);
	next();
});

// Home
app.get('/', function(req,res) {
	page.RenderHome(req,res);
});

app.get('/home', function(req,res) {
	page.RenderHome(req,res);
});


/* langauge specific routing */
app.get('/EN', function(req,res) {
	language.setLanguage(req,res,"EN");
    page.RenderHome(req,res);
});

app.get('/CN', function(req,res) {
	language.setLanguage(req,res,"CN");
   	page.RenderHome(req,res);
});


app.get('/p', function(req,res) {
    page.RenderProductList(req,res);
});


app.get('/about', function(req,res) {
     page.RenderAbout(req,res);
});

app.get('/contact', function(req,res) {
    res.render('page/home.ejs', content);
});



app.get('/*', function(req, res){
    res.render('404.ejs', content);
});