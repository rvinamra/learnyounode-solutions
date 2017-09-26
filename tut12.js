var http = require('http');
var map = require('through2-map');

var a = process.argv;

var server = http.createServer(function (req, res){

	if(req.method != 'POST')
		return res.end('Not a POST. \n');
	req.pipe(map(function(data){
	
		return data.toString().toUpperCase();
	
	})).pipe(res);
});

server.listen(a[2]);
