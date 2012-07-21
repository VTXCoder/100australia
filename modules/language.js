exports.setLanguage=function(req,res,code) {
	req.session.langauge=code;
	res.cookie('langague',req.session.langauge,{ maxAge: 7776000000 });
}