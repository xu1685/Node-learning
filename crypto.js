//加密
var crypto = require('crypto');
var fs = require('fs');

var content = fs.readFileSync('./test.txt', {encoding: 'utf8'});
var hash = crypto.createHash('sha256');
console.log(hash,'hash')
hash.update(content)

var output;
output = hash.digest('hex'); 

console.log(output);