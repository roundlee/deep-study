const http= require('http')

const server = http.createServer()

// server.on('request',function(req,res){
//     console.log('someone visit our web serve');
    
// })
// server.listen(8080,function(){
//     console.log('server running at http://127.0.0.1:8080');
    
// })

// req 请求对象，res相应对象

server.on('request',(req,res)=>{
    const url = req.url
    const method = req.method
    console.log(url,method,'请求的文件和方法');
    const str = `use使用 ${method} requert请求 ${url}`
    // 调用res.end()方法，想客户端响应内容，为防止中文乱码问题，需要对响应头Content-Type 的值设置为：text/html:charset=utf-8
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(str)
    
})
server.listen(80,()=> {
    console.log('....');
    
})