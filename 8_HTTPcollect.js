var http = require('http');
var url = process.argv[2];

var totalData;
http.get(url, function(res){
	var totalData = "";
	res.setEncoding('utf8');
	res.on('data', function(data){
		totalData += data;
	});
	res.on('end', function(){
		console.log(totalData.length);	
		console.log(totalData);
	});
	res.on('error', console.error);
}).on('error', console.error);
