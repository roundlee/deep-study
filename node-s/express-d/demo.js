//1、导入express
const express = require('express')
//2、创建web服务器
const app = express()

//4、监听客户端的GET和POST请求，并向客户端响应具体内容
app.get('/user',(req,res) => {
    // 调用express所提供的res.send()方法，向客户端响应一个josn对象
    res.send({name:'',age:'',gender:''})
})
app.post('/user',(req,res) => {
    // 调用express所提供的res.send()方法，向客户端响应一个文本字符串
    res.send('请求成功')
})

app.get('/',(req,res) => {
    //通过req.query 可以获取到客户端发送给服务器的参数
    // 默认情况下req.query是个空对象{}
    console.log(req.query);
    res.send(req.query)
})
app.get('/user/:id/:name',(req,res) => {
   // req.params 是动态匹配到的参数
   //可以有多个动态参数
    console.log(req.params);
    res.send(req.params)
})

// 调用express.static()方法，快速对外提供静态资源,并托管多个
// 如果需要在托管资源的时候挂载路径前缀，可以在app.use 提供一个参数
app.use('/image',express.static('./public/image'))
app.use(express.static('./public/js'))

//3、启动web服务器
app.listen(80,() => {
    console.log('express server running at http://127.0.0.1');
    
})