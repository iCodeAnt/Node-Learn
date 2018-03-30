
var http = require('http');
var result = ['', '', ''];
var isEnd = [false, false, false];


function printResult() {
	if(isEnd[0] && isEnd[1] && isEnd[2]) {
		console.log(result[0]);
		console.log(result[1]);
		console.log(result[2]);
	}
}

http.get(process.argv[2], function(res){
	res.setEncoding('utf8');
	res.on('data', function(data){
		result[0] += data;
	});

	res.on('end', function(data){
		isEnd[0] = true;
		printResult();
	});
});


http.get(process.argv[3], function (res) {
	res.setEncoding('utf8');
	res.on('data', function (data) {
		result[1] += data;
	});

	res.on('end', function (data) {
		isEnd[1] = true;
		printResult();
	});
});

http.get(process.argv[4], function (res) {
	res.setEncoding('utf8');
	res.on('data', function (data) {
		result[2] += data;
	});

	res.on('end', function (data) {
		isEnd[2] = true;
		printResult();
	});
});


/****
 * 方案2
 

var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResluts() {
	results.forEach(element => {
		console.log(element);
	});
}


function httpGet(index) {
	http.get(process.argv[2 + index], function (res) {

		res.pipe(bl(function (err, data) {
			if (err) {
				return console.error(err)
			}

			results[index] = data.toString();
			count++;
			if (count == 3) {
				printResluts();
			}

		}))

	});
}


for (let i = 0; i < 3; i++) {
	httpGet(i);
}
 
 */