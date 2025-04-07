// 创建api路由模块
const express = require('express')
const router = express.Router()


// 创建挂载路由
router.get('/get',(req,res) => {
    // 通过req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    // 调用res.send()方法，向客户端响应处理结果
    res.send(
        {
            status:0,// 0表示处理成功，1、表示处理失败
            msg:'GET 请求成功', // 状态描述
            data:query
        }
    )
})
router.post('/post',(req,res) => {
    // 通过req.body 获取请求体中包含url-encoded格式的数据
    const body = req.body
    // 调用res.send()方法，向客户端响应处理结果
    res.send(
        {
            status:0,// 0表示处理成功，1、表示处理失败
            msg:'POST 请求成功', // 状态描述
            data:body
        }
    )
})
router.delete('/delete',(req,res) => {
    // 通过req.body 获取请求体中包含url-encoded格式的数据
    const body = req.body
    // 调用res.send()方法，向客户端响应处理结果
    res.send(
        {
            status:0,// 0表示处理成功，1、表示处理失败
            msg:'delete 请求成功', // 状态描述
            data:body
        }
    )
})


module.exports = router


