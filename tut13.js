var http = require('http');
var url = require('url');
var a = process.argv;

function time(date){

	return{
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
}

function unixTime(date){
	return{
	
		unixtime: date.getTime()
	};

}

function proRequest(urlPath, date){
	
	var result;
	if(urlPath === "/api/parsetime"){
		result = time(date);
	
	}
	else if(urlPath === "/api/unixtime"){
	
		result = unixTime(date);
	}

	return result;
}   
	
var server = http.createServer(function(req, res){
	if(req.method != 'GET')
		return res.end('Not a GET request \n');

	var  urlName = url.parse(req.url, true);
	var date = new Date(urlName.query.iso);
	var data = proRequest(urlName.pathname, date);

	if(data){
	
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(data));
	}
	else{
	
		res.writeHead(404);
		res.end();
	}

});

server.listen(a[2]);


