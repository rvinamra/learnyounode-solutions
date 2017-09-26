var fs = require('fs');
var path = require('path');

function filterFile(list, fileExt){
	return list.filter(function(file){
		return path.extname(file) == "." + fileExt;
	});

};

module.exports = function(pathName, fileExt, callback) {

	fs.readdir(pathName, function(err, list){
		if(err){
		return callback(err);
		}
	
	var finalList = filterFile(list, fileExt);
		return callback(null, finalList);
	});

};







