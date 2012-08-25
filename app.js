var express = require('express');
var database_json = require('./database');

var app = express.createServer();

exports.init = function(port) {

    app.configure(function(){
        app.set('views', __dirname + '/views');
        app.set('view engine', 'ejs');
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.static(__dirname + '/static'));
        
        app.use(express.cookieParser());
        app.use(express.session({ secret: "whatever" }));

        app.use(app.router);
        app.enable("jsonp callback");

        // Initialise the database connection
        var env=app.settings.env; if (env==="development") env="dev";
        var db=database_json[env];
        global.conString="tcp://"+db.user+":"+db.password+"@"+db.host+"/"+db.database;
        

        console.log("Connection String: "+global.conString);


    });

    app.configure('development', function(){
       app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
        // app.use(express.logger({ format: ':method :url' }));
    });

    app.configure('staging', function(){
       app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
        // app.use(express.logger({ format: ':method :url' }));
    });

    app.configure('production', function(){
       app.use(express.errorHandler()); 
    });


    app.error(function(err, req, res, next){
       res.render('500.ejs', { locals: { error: err },status: 500 });   
    });

    app.listen(port);

    console.log("Listening on port %d in %s mode", app.address().port, app.settings.env);

    return app;
}