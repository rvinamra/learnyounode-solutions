var http = require('http');
var bufferList = require('bl');
var a = process.argv;
var urls = [];
var res = [];
var count = 0;

for(var i = 2; i<a.length; i++){
	urls.push(a[i]);
}

	http.get(urls[0], function(res){
		res.pipe(bufferList(function(err, data){
			if(err) return console.error(err);
			console.log(data.toString());
		}));
	http.get(urls[1], function(res){
		res.pipe(bufferList(function(err, data){
			if(err) return console.error(err);
			console.log(data.toString());
		}));
	http.get(urls[2], function(res){
		res.pipe(bufferList(function(err, data){
			if(err) return console.error(err);
			console.log(data.toString());
		}));
	
	});

	});

	});

