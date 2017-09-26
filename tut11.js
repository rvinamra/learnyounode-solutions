var a  = process.argv;
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res){

	res.writeHead(200, {'content-type': 'text/plain'});

	var fsStream = fs.createReadStream(a[3]);
	fsStream.pipe(res);

});
server.listen(a[2]);
