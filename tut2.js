
var a = process.argv;
var count = 0;
var i;
for(i=2; i<a.length; i++){

	count = +count + +a[i];
}
console.log(count);
