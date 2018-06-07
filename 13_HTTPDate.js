var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response){
	var parsedUrl = url.parse(request.url, true);
	if(parsedUrl['pathname'] === '/api/parsetime'){
		var dateObj = giveTime(parsedUrl.query.iso, 0);

	}
	else if(parsedUrl['pathname'] === '/api/unixtime') {
		var dateObj = giveTime(parsedUrl.query.iso, 1);
	}
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.end(JSON.stringify(dateObj), "utf8");
});

server.listen(process.argv[2]);




function giveTime(str, param){
	var date = new Date(str);
	if(param === 0) {
		return {
			"hour" : date.getHours(),
			"minute" : date.getMinutes(),
			"second" : date.getSeconds()
		};
	}
	else {
		return {
			"unixtime" : date.getTime()
		};
	}
}