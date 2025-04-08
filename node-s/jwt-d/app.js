const express = require('express')
const app = express()

// 导入jwt相关两个包
const jwt = require('jsonwebtoken') // 生成jwt字符串
const expressJWT = require('express-jwt') // 还原jwt字符串

// 解析post表单数据中间件
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))



//定义secret密钥
const secretKey = 'itheima No ^_^'

// 注册将JWT字符串解析还原成json对象中间件
// 客户端每次在访问那些有权限接口的时候，都需要主动通过请求头中的Authorization字段，将token字符串发送到服务器进行身份验证，
// 此时服务器可以通过express-jwt 这个中间件，自动的将客户端发送过来的token解析还原成json对象
// 使用app.use 来注册中间件
// expressJWT({secret:secretKey}) 就是用来解析token的中间件
// .unless({path:[/^\/api\//]}) 用来指定哪些接口不需要访问权限
// 只要配置成功了express-jwt中间件，就可以吧解析出来的用户信息挂载到req.user属性上
app.use(expressJWT.expressjwt({secret:secretKey,algorithms:["HS256"]}).unless({path:[/^\/api\//]}))


// 登录接口
app.post('/api/login',(req,res) => {
    const userinfo = req.body
    if(userinfo.username !== 'admin' || userinfo.password !== '000000'){
        return res.send({
            status:0,
            msg:'登录失败'
        })
    }
    // 登录成功
    // 在登录成功后，调用jwt。sign()方法生成jwt字符串，并通过token属性发送给客户端
    /**
     * 参数1:用户信息对象
     * 参数2:加密密钥
     * 参数3:配置对象，可以配置当前token的有效期
     */
  const tokenStr =  jwt.sign({username:userinfo.userinfo},secretKey,{expiresIn:'30s'})
  res.send({
    status:200,
    message:'登录成功',
    token:tokenStr,// 要发送给客户端的token字符串
  })
})



// 这是一个有权限的APi接口
app.get('/admin/getinfo',(req,res) => {
    // 使用req.user获取用户信息，并使用data属性将用户信息发送给客户端
    console.log(req.auth);
    res.send({
        status:200,
        message:'获取用户信息成功',
        data:req.user
    })
    
})

app.use((err,req,res,next) => {
    //token解析失败
    if(err.name === 'UnauthorizedError'){
        return res.send(
            {
                stauts:401,
                message:'无效的token'
            }
        )
    }
    
    res.send({
        status:500,
        message:'未知错我'
    })
})

const cors = require('cors')
app.use(cors())

app.listen(80,() => {
    console.log('http://127.0.0.1');
    
})