var http = require('http');
var bufferList = require('bl');
var a = process.argv;

http.get(a[2], function(response){
	response.pipe(bufferList(function(err, data){
		if(err) return console.error(err);
		var str = data.toString();
		console.log(str.length);
		console.log(str);
	
	}))

});
