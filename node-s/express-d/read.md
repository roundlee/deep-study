### 目标
    能够使用express.static()快速托管静态资源
    能够使用express路由精简项目结构
    能够使用常见的express中间件
    能够使用express创建api接口
    能够在express中启用cors跨域资源共享

### 学习提纲
    认识express
    express路由
    express中间件
    使用express写接口

#### Express
    Express是基于Node.js平台，快速、开放、极简的web开发框架，
    通俗的讲就是与node.js中的http模块类似，是专门用来创建web服务器的

    express的本质：就是一个npm上的第三方包，提供了快速创建Web服务器的便捷方法

    express 是基于node.js http模块进一步封装出来的

    1、express能做什么
        对前端程序员来说，最常见的两种服务器，分别是：
            web网站服务器：专门对外提供web网页资源的服务器
            API接口服务器：专门对外提供接口的服务器
        使用express，可以方便的创建web网站服务器或API接口服务器

    2、安装(可指定版本或安装最新版)
    在项目根目录中，运行
    npm i express@4.17.1 

    3、导入并创建启动

    3、监听get请求
    可以通过app.get()方法进行监听客户端的get请求

    4、监听post请求
    通过app.post()

    5、把内容响应客户端
    app.send()

6、获取URL中所携带的查询参数
    通过req.query对象。可以访问到客户端通过查询字符串的形式，发送到服务器的参数：
```js
    app.get('/',(req,res) => {
        //req.query 默认是一个空对象
        //客户端使用 ?name=zz&age=22 这种查询字符串形式发送到服务器的参数
        //可以通过req.query 对象进行访问
        //req.query.name .....
        console.log(req.query)
    })
```
7、获取动态参数
    通过req.params对象，可以访问到URL中，通过：匹配到动态参数
```js
    app.get('/user/:id',(req,res) => {
        //req.params 默认是一个空对象
       // 存放着动态匹配到的参数id
        console.log(req.params)
    })
```

### 托管动态资源
1、express.static() 注意：express在指定的静态目录中查找文件，并对外提供资源的访问路径，因此，存放静态文件目录名不会出现在URL中
```js
 //express 提供一个express.static()方法，可以非常方便的创建一个静态资源服务器，例如我们可以给通过如下方法将 public目录下的所有文件 对外开放,对app.use(挂载的路径前缀,express.static('public'))
 app.use('/public',express.static('public'))
 // 这样可以直接通过url地址直接访问相关文件如图片、js、css文件
 // http://localhost:3000/images/bg.jpg 等 没进行挂载
 // http://localhost:3000/public/images/bg.jpg 等 进行挂载
```

### nodemon
1、可以使用nodemon，这个工具，监听项目文件的变动，当代码被修改后，nodemon 会自动帮我们重启项目，极大的方便了开发和调试
    
2、安装
```bash
npm install -g nodemon
```
3、 使用nodemon
```
不再用node 去启动项目，而是用nodemon app.js 来启动项目，这样代码被修改后，会被nodemon监听到，从而实现自动重启项目的效果
```

### express 路由

1、路由
```
广义上来讲，路由就是映射关系，

在express中，路由是指客户端的请求与服务器处理函数之间的映射关系  

express 中的路由分3部分，分别是请求的类型、请求的URL地址、处理函数、格式如下：
    app.METHOD(PATH,HANDLER) 
        method  代表的请求类型
        path    代表请求URL地址
        handler 代表处理函数
```

2、路由的匹配过程
```
每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数，在匹配时，会按照路由顺序进行匹配，如果请求类型和请求的URL同时匹配成功，则express会将这次请求转交给对应的处理函数进行处理
```
3、 模块化路由
```
 创建路由模块对应的.js文件
 调用express.Router()函数创建路由对象
 向路由对象挂载具体的路由
 通过module.exports 向外共享路由对象
 使用app.use()函数注册路由模块
```

### express 中间件
    中间件(Middleware) ，特质业务流程的中间处理环节
1、express 中间件的调用流程
```
当一个请求到达express的服务器后，可以连续调用多个中间件，从而对这次请求进行预处理
```
2、express中间件的格式
```
express 中间件，本质上就是一个function处理函数，express中间件的格式如下:

注意 中间件的处理函数必须包含next 参数，而路由处理函数指包含req和res
```
```js
    const express = require('express')
    const app = express()
    app.get('/',function(req,res,next) => {
        next()
    })
    app.listen(3000)
```

3、 next()函数的作用
```
next()函数时实现多个中间件连续调用的关键，它表示吧流转关系转交给下一个中间件或路由
```
4、定义中间件函数
```js
// 常量mw所指向的，就是一个中间件函数
const mw = function(req,res,next){
    console.log('这是一个中间件函数')
    // 注意：在当前中间件的业务处理完成，必须调用next()函数
    // 表示把流转关系转交给下一个中间件或路由
    next()
}
```

5、全局生效的中间件
使用app.use(中间件函数)

6、 中间件的作用
```
多个中间件,共享同一份req和res，基于这样的特性，我们可以在上游的中间件中统一为req和res对象添加自定义的属性或方法，供下游中间件或路由使用
```

7、 定义多个全局中间件
```
可以使用app.use()连续定义多个全局中间件，客户端请求到达服务器后，会按照中间件定义的先后顺序依次惊醒调用
```

8、 局部中间件
```
不实用app.user()定义的中间件，叫做局部生效的中间件
```

9、中间件的注意事项
```
一定要在路由前面调用中间件
客户端发送过来的请求，可以连续调用多个中间件来处理
执行完中间件的业务代码之后，不要忘记调用next()函数
为防止代码逻辑混乱，在调用next()后不要在写额外代码
连续调用多个中间件时，多个中间件之间共享req和res对象
```

10、中间件的分类，分为5大类
```
    应用级别的中间件
    路由级别的中间件
    错误级别的中间件
    Express 内置中间件
    第三方中间件
```
10.1 应用级别的中间件  
通过app.use()、qpp.get()、app.post()，绑定到app实例上的中间件，叫做应用级别的中间件
```js
   
    app.use(req,res,next) => {
        next()
    }
    app.get('/',nw1,(req,res) => {
        res.send('page')
    })

```
10.2路由级别的中间件  
绑定到express.Router()实例上的中间件，叫做路由级别的中间件，它的用法和应用级别的中间件没有任何区别，只是应用级别的中间件是绑定到app实例上，而路由级别中间件事绑定到router实例上，例如：
```js
    var app = express()
    var router = express.Router()

    router.use(function(req,res,next){
        next()
    })
   app.use('/',router)
```
10.3 错误级别的中间件  
错误级别的中间件的作用，专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题  
格式：错误级别的中间件的function处理函数，必须有4个形参，形参顺序从前到后，分别是（err,req,res,next）。具体在demo1.js  
注意：错误级别中间件必须注册在所有路由之后
```js
    app.get('/',(req,res) => { //路由
        throw new Error('服务器内部发生错误') // 抛出一个自定义错误
        res.send('Home page')
    })
    app.use(function (err,req,res,next){// 错误级别的中间件
        console.log('发生错我' + err.message) // 在服务器上打印错误消息
        res.send('error' + err.message) // 向客户端响应错误相关内容
    })
```

10.4 内置中间件 demo3.js
自express 4.16.0 版本开始，express内置了3个常用的中间件，极大的提高了express项目的开发效率和体验
```
express().static 快速托管静态资源的内置中间件，例如 html文件，图片，css样式等（无兼容性）
express().json 解析JSON格式的请求数据(有兼容性,仅在4.16.0+版本可用)
express.urlencoded解析 URL-encoded格式请求体数据（有兼容性，仅在4.16.0+版本中可用）

配置解析application/json格式的内置中间件
app.use(express.json())

配置application/x-www-form-urlencoded 格式数据的内置中间件
app.use(express.urlencoded({extended:false}))
```

10.5 第三方中间件
在express@4.16.0之前的版本中，经常使用body-parser这个第三方中间件，来解析请求体数据
 npm install body-parser 安装中间件
 require导入中间件
 app.use()注册

 11、自定义中间件 demo4.js
 手动模拟 一个类似于express.urlencoded中间件，来解析post提交到服务器的表单数据
 ```
  定义中间件
  监听req的data事件
    在中间件中，需要监听req对象的data事件，来获取服务器的数据，如果数据量比较大无法一次性发送完毕，则客户端会把数据切割后，分批发送到服务器，所以data事件可能会出发多次，每次出发data事件是，获取到的数据只是完整数据的一部分，需要手动对接收到的数据进行拼接

  监听req的end事件
    当请求体数据接受完毕之后，会自动触发req的end事件，因此，可以在req的end事件中拿到完整的请求体数据

  使用querystring模块解析实体数据，将解析出来的数据对象挂载为req.body
    node.js内置了模块，专门用来处理查询字符串，通过这个模块提供的parse()函数，可以轻松把查询的字符串，解析成对象格式
    上游的中间件和下游中间件及路由直接，共享同一份req和res，因此我们可以将解析出来的数据，挂载为req的自定义属性，命名为req.body

  将自定义中间件封装为单独模块使用
  ```

  12、使用express写接口  demo5.js  
  12.1、创建基本服务器  
  12.2、创建api路由模块
  12.3、编写get接口
  12.4、编写post接口
  12.5、接口跨域问题
  ```
    解决接口跨域问题的方案主要有两种
        CORS（主流的解决方案，推荐使用）
        JSONP（有缺陷的解决方案，只支持get请求）

    使用express 的第三方中间件解决跨域问题，通过安装和配置cors中间件

```

13、 什么是CORS
```
    CORS(Cross-Origin Resoure Sharing,跨域资源共享)由一系列HTTP响应头组成，这些HTTP响应头，决定浏览器是否阻止前端js代码跨域获取资源

    浏览器的同源安全策略默认会阻止网页的“跨域”获取资源，但如果接口服务器配置了cors相关的HTTP响应头就可以解除浏览器端的跨域访问限制

    注意：
    CORS主要在服务器端进行配置，客户端浏览器无需做任何额外的配置，即可开启cors的接口
    CORS在浏览器中有兼容性，只有支持XMLHttpRequest level2的浏览器，才能正常访问开启了cors的服务端接口

    CORS响应头部 - Access-Control-Allow-Origin
    如果指定了Access-Control-Allow-Origin 字段的值为通配符*，表示允许来自任何域的请求
        res.setHeader('Access-Control-Allow-Origin','*')
    
    CORS响应头部 - Access-Control-Allow-Headers
    默认情况下，cors仅支持客户端向服务器发送如下9个请求头
    Accept,Accept-Language,Content-Language,DPR,Downlink,Save-Data,Viewport-Width,Width,Content-Type (值仅限于 text/plain,multipart/form-data,application/x-www-form-urlencoded 三者之一)
    如果客户端向服务器发送了额外的请求头信息，则需要在服务端，通过Access-Control-Allow-Headers 对额外的请求头进行声明，否则这次请求会失败
    // 注意：多个请求头之间用英文逗号进行分割
    res.setHeader('Access-Control-Allow-Headers','Content-Type,X_Custom-Header')

    CORS响应头部 - Access-Control-Allow-Methods
    默认情况下，cors仅支持客户端发器get、post、head 请求
    如果客户端希望通过PUT、DELETE等方式请求服务器的资源，则需要在服务器端，通过Access-Control-Allow-Methods来指明实际请求所允许使用的HTTP方法


```
13.1 cors请求分类
```
    简单请求：
    同时满足一下两大条件的请求
    请求方式：GET、POST、HEAD 三者之一
    HTTP头部信息：Accept,Accept-Language,Content-Language,DPR,Downlink,Save-Data,Viewport-Width,Width,Content-Type (值仅限于 text/plain,multipart/form-data,application/x-www-form-urlencoded 三者之一)

    预检请求
    在浏览器与服务器正式通信之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求，所以这次的OPTION请求成为“预检请求”，服务器成功响应预检请求后，才会发送真正的请求，并携带真实数据
        请求方式：GET、POST、HEAD 之外的的请求 Mthod类型
        请求头部包含自定义的头部字段
        向服务器发送了 application/json 格式的数据

```

14、 jsonp 接口
```
浏览器中通过<script>标签scr属性，请求服务器上的数据，同时，服务器返回一个函数的调用，这种请求数据的方式叫做jsonp

特点
jsonp 不属于真正的ajax请求，因为它没有使用XMLHttpRequest这个对象
jsonp仅支持GET请求，不支持POST、PUT、DELETE等请求

创建jsonp接口的注意事项：
如果项目中已经配置了cors跨域资源共享，为了防止冲突，必须在配置CORS中间件之前声明JSONP的接口，否则JSONP接口会被处理成开启cors的接口

实现步骤：

```












