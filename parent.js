// //1.IPC通信
// //通过 fork 创建子进程（父子进程之间创建了IPC通道）
// let cp = require('child_process');
// let child = cp.fork('./child')

// //监听子进程消息
// child.on('message',function(msg){
//     console.log('got message from child is:'+msg)
// })

// //向子进程发送信息
// child.send('"hey,child"')

// console.log(process.connected );
// //true

// //中断父子间IPC通信
// // child.disconnect()

//2.关于silent
let cp = require('child_process')
let child = cp.fork('./child.js',{
    silent:true
})

child.stdout.setEncoding('utf8');
child.stdout.on('data', function(data){
    console.log(data);
});