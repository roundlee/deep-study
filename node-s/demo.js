const fs = require('fs')
const path = require('path')
const http = require('http')
const { log } = require('console')
const { url } = require('inspector')

const server = http.createServer()


server.on('request', (req, res) => {
    // 获取客户端请求地址，
    //把请求的url地址，映射为本地文件的存放路径
    const url = req.url
    // const fpath = path.join(__dirname,'./path-d',url)
    // 优化资源的请求路径

    let fpath = ''
    if(url === '/'){
        fpath = path.join(__dirname,'/path-d/block/index.html')
    }else{
        fpath = path.join(__dirname,'./path-d/block',url)
    }
    fs.readFile(fpath,'utf-8',(err,dataStr) => {
        if(err){
            return res.end('404 not found')
        }
        res.end(dataStr)
    })
    
})

server.listen(80, () => {
    console.log('server listen at http://127.0.0.1');

})
