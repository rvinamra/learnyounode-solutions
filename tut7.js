var http = require('http');
var a = process.argv;

var req = http.get(a[2], function(response) {

	response.setEncoding('utf8');
	response.on('err', function(err){
		console.error(err);
	
	});
	response.on("data", function(chunk){
	
		console.log(chunk);
	});

});
