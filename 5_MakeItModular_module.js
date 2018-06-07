var path = require('path');
var fs = require('fs');

module.exports = function (dir, ext, callback){
	
	fs.readdir(dir, function (err, lines) {
		if(err) return callback(err, null);
		var result = [];
		for(var i = 0;i < lines.length; i++){
			if(path.extname(lines[i]) === '.'+ext){ result.push(lines[i]);}
		}
		
		return callback(null, result);
	})
	
}

