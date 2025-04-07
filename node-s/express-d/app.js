
const express = require('express')
const router = require('./router')
const app = express()

app.use(router)
// 注意：app.user() 函数就是用来注册全局中间件，为路由模块加前缀 app.user('/api',router)

// 最简单的路由用法
// app.get('/',(req,res) => {
//     res.send('hello wold')
// })

// app.post('/',(req,res) => {
//     res.send('this is POST Request')
// })

// app.listen(80,() => {
//     console.log('run serve 127.0.0.1');
// })

// // 最简单的路由用法
// const express = require('express')
// const app = express()


// 模块化注册路由

app.listen(80,() => {
    console.log('run serve 127.0.0.1');
})