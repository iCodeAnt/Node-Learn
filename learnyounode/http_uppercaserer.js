var http = require('http')

http.createServer(function (req, res) {
	var postData = '';
	req.addListener("data", function (postDataChunk) {
		if (req.method === 'POST') {
			postData += postDataChunk;
		}
	});

	req.addListener("end", function () {
		if (req.method === 'POST') {
			res.end(postData.toUpperCase(), 'utf8');
		}		
	});

}).listen(process.argv[2]);


/**
 * 
 * 方案2
 
    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

 */