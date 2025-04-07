// 错误中间件的使用
const express = require('express')
const app = express()

//定义路由
app.get('/',(req,res) => { //路由
    throw new Error('服务器内部发生错误') // 抛出一个自定义错误
    res.send('Home page')
})

// 定义一个全局的错误级别的中间件，捕获整个项目的异常，防止程序崩溃
app.use(function (err,req,res,next){// 错误级别的中间件
    console.log('发生错我' + err.message) // 在服务器上打印错误消息
    res.send('error' + err.message) // 向客户端响应错误相关内容
})

app.listen(80,() => {
    console.log('serve http://127.0.0.1');
    
})