// session 的使用
const express = require('express')
const app = express()

// 配置session中间件
const session = require('express-session')
app.use(session({
    secret:'itheima',
    resave:false,
    saveUninitialized:true
}))

// 向session中存数据，成功配置express-sessio中间件之后，才会有req.session属性
app.post('/api/login',(req,res) => {
    if(req.body.username !=='admin' || req.body.password !== '000000'){
        return res.send({status:1,msg:'登录失败'})
    }
    req.session.user = req.body // 将用户信息存储到 session中
    req.session.islogin = true // 将用户的登录状态，存储到session中

    res.send({status:0,msg:'登录成功'})
})

// 获取用户姓名接口
app.get('/api/username',(req,res) => {
    // 从seesion中获取用户名称，响应给客户端
    if(!req.session.islogin){
        return res.send({status:1,msg:"fail"})
    }
    res.send({
        status:0,
        msg:'success',
        username:req.session.user.username
    })
})

// 清空session ,用户在退出登录后，需要清空ssession信息
app.post('/api/logout',(req,res) => {
    // 清空session信息
    req.session.destroy()
    res.send({
        status:0,
        msg:'退出登录'
    })
})

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