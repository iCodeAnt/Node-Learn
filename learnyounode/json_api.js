var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function (req, res) {
	var obj = url.parse(req.url);
	var param = querystring.parse(obj.query);

	res.writeHead(200, {"Content-Type" : "application/json"});

	if ("/api/parsetime" === obj.pathname) {
		var date = new Date(param.iso);

		var retObj = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		};

		res.end(JSON.stringify(retObj));
	}

	if ('/api/unixtime' === obj.pathname) {
		var date = new Date(param.iso);
		var retObj = {unixtime: date.getTime()};

		res.end(JSON.stringify(retObj));
	}

}).listen(process.argv[2]+'\n');


/***
 * 方案2
 
var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

 */