exports.setLanguage=function(req,res) {

	req.session.language = "en"; 

	if(req.path.split("/").indexOf("en")>=0)
		req.session.language="en";
	if(req.path.split("/").indexOf("zh-cn")>=0)
		req.session.language="cn";
	if(req.path.split("/").indexOf("zh-tw")>=0)
		req.session.language="tw";

	res.cookie('langague',req.session.langauge,{ maxAge: 7776000000 });
}