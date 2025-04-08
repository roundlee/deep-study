#### ajax

1、ajax的定义
```
AJAX是异步的javascript和XML（Asynchronous javascript and XML），简单说，就是使用XMLHttpRequest对象与服务器通信，他可以使用JSON、XML、HTML、和text文本等格式发送和接受数据。ajax最喜迎人的是它的“异步”性，就是说可以在不重新刷新页面的情况下与服务器通信，交换数据，或更新页面
```
2、axios的使用
```
引入axios
使用axios函数
axios({
    url:'目标资源地址',
}).then((result) => {
    // 对服务器的数据进行处理
})
```

3、认识URL
```
URL（Uniform Resource Locator）：统一资源定位符,简称网址

组成：
    协议：超文本传输协议，规定浏览器和服务器之间传输数据格式（http、https...）
    域名：标记服务器在互联网中的方位
    资源路径：标记资源在服务器下的具体位置

```

4、URL查询参数
```
定义：浏览器提供给服务器的额外信息，让服务器返回浏览器想要的数据

axios-查询参数
语法：使用axios提供的params选项
axios({
    url:'',
    params:{
        name:''
    }
}).then(result => {})
```

5、请求方法
```
请求方法：对服务器资源，要执行的操作
    get：   获取数据
    post：  提交数据
    put：   修改数据（全部）
    delete：删除数据
    patch： 修改数据（部分）

axios的请求配置
    url:请求地址
    method：请求的方法，get可以省略（不区分大小写）
    data：提交数据

axios({
    url:'',
    method:''
    data:{
        name:''
    }
}).then(result => {})
```

6、axios 错我处理
```
语法：在then方法后面，通过点语法调用catch方法，传入回调函数并定义形参
axios({
    // 请求选项
}).then(result => {
    // 处理数据
}).catch(error => {
    // 处理错我
})
```

7、HTTP协议-请求报文
```
请求报文：浏览器按照HTTP协议要求的格式，发送给服务器的内容
组成：
请求行：请求方法，URL，协议
请求头：以键值对的格式携带的附加信息，比如：Content-Type：application/json
空行：分隔请求头，空行之后的是发送给服务器的资源
请求体：发送的资源

```

8、请求报文-错我排查

9、HTTP协议 - 响应报文
```
服务器按照HTTP协议要求的格式，返回给浏览器的内容

响应行（状态行）：协议、HTTP响应状态码，状态信息
响应头：以键值对的格式附加信息
空行：分隔响应头，空行之后是服务器返回的资源
响应体：返回的资源

HTTP状态码：
1xx：信息
2xx：成功
3xx：重定向消息
4xx：客户端错误
5xx：服务端错误
```

10、接口文档
```
描述接口的文档
接口：使用AJAX和服务器通讯是，使用URL，请求方法，以及参数
```