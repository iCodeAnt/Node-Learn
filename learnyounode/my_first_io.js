    var fs = require('fs')
    
    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)


 /*
var fs = require('fs');

var filename = process.argv[2];

file = fs.readFileSync(filename)
contents = file.toString();
console.log(contents.split('\n').length - 1)
 */