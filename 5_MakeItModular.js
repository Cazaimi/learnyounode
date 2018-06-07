var dir = process.argv[2];
var ext = process.argv[3];

var mod = require('./5_MakeItModular_module');

mod(dir, ext, function(err, files) {
	if(err) console.log('program was not executed properly.');
	for(var i = 0;i < files.length; i++){
		console.log(files[i]);
	}
})
