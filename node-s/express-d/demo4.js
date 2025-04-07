// 定义自定义中间件
const express = require('express')
const app = express()

// 导入node.jsn内置的querystring 模块
const qs = require('querystring')


// app.use(function(req,res,next){
//     // 定义str变量，存储客户端发送过来的数据
//     let str = ''
//     // 监听req的data事件
//     req.on('data',(chunk) => {
//         str += chunk
//     })
//     // 监听req的end事件
//     req.on('end',() => {
//         // 在str中存放完整的请求体数据
//         console.log(str);
//         //TODO:把字符串格式的请求体，解析成对象格式
//         const body = qs.parse(str)
//         req.body = body
//         next()        

//     })
// })
// app.post('/user',(req,res) => {
//     res.send(req.body)
// })

// // 启用服务器
// app.listen(80,() => {
//     console.log('serve http://127.0.0.1');
    
// })

// 把上自定义中间件封装成函数，并导出该函数，其他模块进行导入并使用app.use进行挂载使用

const queryBodyParse = (req,res,next) => {
     // 定义str变量，存储客户端发送过来的数据
     let str = ''
     // 监听req的data事件
     req.on('data',(chunk) => {
         str += chunk
     })
     // 监听req的end事件
     req.on('end',() => {
         // 在str中存放完整的请求体数据
         console.log(str);
         //TODO:把字符串格式的请求体，解析成对象格式
         const body = qs.parse(str)
         req.body = body
         next()        
 
     })
}
module.exports = queryBodyParse
