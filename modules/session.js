var geoip = require('geoip-lite');

/* session.geo={
 range: [ 3479299040, 3479299071 ],
  country: 'US',
  region: 'CA',
  city: 'San Francisco',
  ll: [37.7484, -122.4156] }
*/

exports.initialise=function(req,res) {

	var currentVersion=2;
	if (!req.session.version || req.session.version < currentVersion) {
		console.log("Initialising Session");

		req.session.member=0;

    // Only lookup the country if it isn't in a cookie
    if (req.cookies.language) {
      var cookies = {language:req.cookies.language};
    } else {
      var cookies = {language:"EN"};
    }

    req.session.langauge=cookies.language;

    req.session.itemcount=0;

		// Setting the version must be the last thing in case of errors
		req.session.version=currentVersion;
	}

  // Set the country cookie
  res.cookie('language',req.session.langauge,{ maxAge: 7776000000 });

  

}

function getClientIp(req) {
  var ipAddress;
  var forwardedIpsStr = req.header('x-forwarded-for'); 
  if (forwardedIpsStr) {
    var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress) {
    ipAddress = req.connection.remoteAddress;
  }
  if (ipAddress=="127.0.0.1") ipAddress='61.88.119.66'; // Australian IP Address
  return ipAddress;
};