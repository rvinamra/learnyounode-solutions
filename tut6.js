var mymodule = require('./mymodule');

var a = process.argv;
var pathName = a[2];
var fileExt =  a[3];

function callback(err, arr){
	if(err){
		console.log(err);
	}
	for(var i in arr){
	console.log(arr[i]);
	}

}
mymodule(pathName, fileExt, callback);





