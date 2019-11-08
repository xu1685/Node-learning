//cluster意为集成，集成了两个方面，第一个方面就是集成了child_process.fork方法创建node子进程的方式，
// 第二个方面就是集成了根据多核CPU创建子进程后，自动控制负载均衡的方式。

const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
    console.log(`主进程${process.pid}正在运行`);

    for(let i=0;i<numCPUs;i++){
        cluster.fork()
    }

    cluster.on('exit',(worker,code,signal) => {
        console.log(`工作进程${worker.process.pid}已退出`);
    })
}else{
    http.createServer((req,res) => {
        res.writeHead(200)
        res.end('hello world\n')
    }).listen(8000)
    console.log(`工作进程 ${process.pid}已启动`)
}

//们将master称为主进程，而worker进程称为工作进程，
// 利用cluster模块，使用node封装好的API、IPC通道和调度机,
// 可以非常简单的创建 包括一个master进程下HTTP代理服务器 + 多个worker进程多个HTTP应用服务器的架构。