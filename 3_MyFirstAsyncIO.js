var fs = require('fs');
var filename = process.argv[2];

function countNewLines(callback) {
	fs.readFile(filename, function(err, data){
		if(err) console.log('Error occured: File not read.');
		callback((data.toString().split("\n").length)-1);		
	})
}

function print(variable) {
	console.log(variable);
}

countNewLines(print);
