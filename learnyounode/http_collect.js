const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response){
	response.pipe(bl(function (err, data) {
		if (err) {
			return console.error(err)
		}
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
});

/*
//方案2
http.get(process.argv[2], function (response) {
	// response.setEncoding('utf8')
	// response.on('data', console.log)
	// response.on('error', console.error)
	var result = '';
	response.setEncoding('utf8');
	response.on('data', function (data) {
		result += data;
	});

	response.on('end', function (data) {
		console.log(result.length);
		console.log(result);
	});


}).on('error', console.error)
*/