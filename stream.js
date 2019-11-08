//Readable Stream
//1.
// var fs = require('fs');

// var readStream = fs.createReadStream('./sample.txt');
// var content = '';

// readStream.setEncoding('utf8');

// readStream.on('data', function(chunk){
//     content += chunk;
// });

// readStream.on('end', function(chunk){
// 	// 文件读取完成，文件内容是 [你好，我是程序猿小卡]
// 	console.log('文件读取完成，文件内容是 [%s]', content);
// });

//2.这里用.pipe(dest)，好处在于如果源文件较大，对于降低内存占用有好处。
// const fs = require('fs')
// fs.createReadStream('./sample.txt').pipe(process.stdout)

//3.可以稍做修改，达到和1同样的效果
// var fs = require('fs');

// var onEnd = function(){
// 	process.stdout.write(']');	
// };

// var fileStream = fs.createReadStream('./sample.txt');
// fileStream.on('end', onEnd)

// fileStream.pipe(process.stdout);

// process.stdout.write('文件读取完成，文件内容是[');

//Transform Stream
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream('./sample.txt');
var out = fs.createWriteStream('./sample.txt.gz');

inFile.pipe(gzip).pipe(out);