// 内置中间件的使用
const express = require('express')
const app = express()

// 注意：除了错误级别的中间件，其他的中间件必须在路由之前
// 配置解析application/json格式的内置中间件
app.use(express.json())

//配置application/x-www-form-urlencoded 格式数据的内置中间件
app.use(express.urlencoded({extended:false}))

//定义路由
app.post('/user',(req,res) => { //路由
    // 在服务器可以使用req.body 这个属性来接口客户端发送过来的请求体数据
    // 默认情况下没有配置解析表单的数据的中间件，则req.body = undefind
    console.log(req.body);
    res.send('ok')
})


app.listen(80,() => {
    console.log('serve http://127.0.0.1');
    
})