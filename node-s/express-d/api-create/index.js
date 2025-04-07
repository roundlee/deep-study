const express = require('express')
const app = express()

// 配置解析application/json格式的内置中间件
app.use(express.json())

//配置application/x-www-form-urlencoded 格式数据的内置中间件
app.use(express.urlencoded({extended:false}))

// 配置jsonp接口
app.get('/api/jsonp',(req,res) => {
    //  定义jsonp具体的实现接口
    // 获取客户端发送过来的回调函数的名字
    const funcNamae = req.query.callback
    //得到要通过jsonp形式发送给客户端的数据
    const data = {name:"za",age:33}
    // 根据前两部得到的数据，拼接出一个函数调用的字符串
    const scriptStr = `${funcNamae}(${JSON.stringify(data)})`
    // 把上一步拼接的字符串，响应给客户端的<script>标签进行解析执行
    res.send(scriptStr)
})

// 解决接口跨域问题，一定要在路由之前
const cors = require('cors')
app.use(cors())

// 导入并挂载对应路由模块
const router = require('./router')
app.use('/api',router)


app.listen(80,() => {
    console.log('run serve 127.0.0.1');
})