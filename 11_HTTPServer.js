var fs = require('fs');
var http = require('http');
var filename = process.argv[3]

var server = http.createServer(function (req, res){

	/*Here, req and res are both streams. They(streams) have a property
	that stream1.pipe(stream2) will stream the contents of stream1 to
	stream2. This way, we create a stream of the file, and pass it to 
	response directly.*/
	res.writeHead(200, { 'content-type': 'text/plain' });
	fs.createReadStream(filename).pipe(res);
});

server.listen(process.argv[2]);