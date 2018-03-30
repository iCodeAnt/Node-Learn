// console.log(process.argv);

const filterFn = require('./my_filter.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
	if (err) {
		return console.error('There was an error:', err)
	}	

	list.forEach(function(file){
		console.log(file)
	})
})