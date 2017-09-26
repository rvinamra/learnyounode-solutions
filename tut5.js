var a = process.argv;
var fs = require('fs');
var path = require('path');
var pathName = a[2];
var fileExt = "." + a[3];
var i;
fs.readdir(pathName, callback);

function callback(err, list){
	if(err) throw err;
	else{
		for(i=0; i<list.length; i++)
		{
			if(path.extname(list[i]) == fileExt)
			{
				console.log(list[i]);
			}
		}
}
}


