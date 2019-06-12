//Node.js是什么:
//Node.js是一个js的运行平台。利用了chrome的V8引擎，使其可以开发服务器程序，发送http请求。

//Node.js特点:
//单线程，异步非阻塞I/O，事件驱动。（减少内存消耗，充分利用cpu）


//安装express 
//cnpm install express --save
 
//demo.js基本语法
var express = require('express')
var app = express();

//路由清单，中间件
app.get('/',function(req,res){
    res.send('我是首页')
})

app.get('/music',function(req,res){
    res.send('音乐频道')
})

app.get('/student/:nums',function(req,res){
    res.send('学生编号' + req.params.nums) //req.params可以获取路由参数
})

//监听 
app.listen(3000)