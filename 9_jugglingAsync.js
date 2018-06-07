var http = require('http');
var urlArray = [];
for(var i = 2;i < 5;i ++){
	urlArray.push(process.argv[i]);
}

http.get(urlArray[0], function(response0){
	var totalData0 = "";
	response0.on('data', function(obj){
		totalData0 += obj;
	});
	response0.on('end', function(){
		console.log(totalData0);
		totalData1 = "";
		http.get(urlArray[1], function(response1){
			response1.on('data', function(obj){
				totalData1 += obj;
			});
			response1.on('end', function(){
				console.log(totalData1);
				http.get(urlArray[2], function(response2){
					var totalData2 = "";
					response2.on('data', function(obj){
						totalData2 += obj;
					});
					response2.on('end', function(){
						console.log(totalData2);
					});
					response0.on('error', console.error);
				});
			});
			response1.on('error', console.error);
		});
	});
	response0.on('error', console.error);
}).on('error', console.error);

/*A much more sophisiticated solution: 

var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }

*/