var fileName = process.argv[2];
var fs = require('fs');

var buf = fs.readFileSync(fileName);

var str = buf.toString();

var words = str.split("\n");

console.log(words.length-1);
