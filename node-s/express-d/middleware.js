const express = require('express')
const app = express()

//定义简单的中间件
const mw = function(req,res,next){
    // 注意：在当前中间件的业务处理完成，必须调用next()函数
    // 表示把流转关系转交给下一个中间件或路由
    // 获取到请求到服务器的时间
    // 为req对象，挂载自定义属性，从而把时间共享给后面所有路由
    console.log(1);
    const time = new Date()
    req.startTime = time
    next()
}
const w = function(req,res,next){
    console.log(2);
    next()
}
// 注册全局生效的中间件
app.use(mw)
app.use(w)

// // 定义一个全局简化形式的中间件
// app.use(function(req,res,next){
//     console.log('这是一个简单的中间件函数')
//     // 注意：在当前中间件的业务处理完成，必须调用next()函数
//     // 表示把流转关系转交给下一个中间件或路由
//     next()
// })

//定义一个局部生效的中间件,多个局部中间件 两种形式
const liter = (req,res,next) => {
    console.log('局部生效的中间件');
    next()
}
const liter1 = (req,res,next) => {
    console.log('局部生效的中间件1');
    next()
}
// 形式1
app.get('/',[liter,liter1],(req,res) => {
    res.send('home page'+req.startTime)
})
// 形式2
// app.get('/',liter,liter1,(req,res) => {
//     res.send('home page'+req.startTime)
// })
app.get('/user',(req,res) => {  
    res.send('user page'+req.startTime)
})

app.listen(80,() => {
    console.log('http://127.0.0.1');
    
})