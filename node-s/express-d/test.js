
const express = require('express')
// 导入封装的请求体数据处理模块
const queryBodyParse = require('./demo4')
const app = express()
// 全局挂载导入的模块
app.use(queryBodyParse)
app.post('/user',(req,res) => {
    res.send(req.body)
})

app.listen(80,() => {
    console.log('run serve 127.0.0.1');
})