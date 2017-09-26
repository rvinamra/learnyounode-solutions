var a = process.argv;
var net = require('net');

function formatZero(num){
	if(num<10)
		return "0" + num;
	else
		return num;

}

function getDate(today){

	return [today.getFullYear(), formatZero(today.getMonth() + 1),
		formatZero(today.getDate())].join("-") +" "+
		[formatZero(today.getHours()),
		formatZero(today.getMinutes())].join(":");


}

var server = net.createServer(function (socket){
	var today = new Date();
	socket.end(getDate(today) + "\n");

});
server.listen((a[2]));

