var a = process.argv;
var fs = require('fs');

var str = fs.readFile(a[2], callback);
	
	
function callback(err,data){
	if (err) throw err;
	var lis = data.toString().split('\n');
	console.log(lis.length-1);

}

