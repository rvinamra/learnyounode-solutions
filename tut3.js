var a = process.argv;
var fs = require('fs');
var str = fs.readFileSync(a[2]).toString();
var lis = str.split('\n');
console.log(lis.length-1);

