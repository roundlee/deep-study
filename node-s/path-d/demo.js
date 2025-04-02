const fs = require('fs')
const path = require('path')
/**
 * 利用fs文件模块和path路径处理模块进行对html中的css与js的抽离并外部引入css与js
 * 1. 建立匹配style和scrpit标签及内容的正则表达式
 * 注：\s 表示空白字符，\S表示非空白字符
 */
const styleReg = /<style>[\s\S]*<\/style>/
const scriptReg = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'./index.html'),'utf-8',function(err,dataStr){
    if(err){
        return console.log('读取失败');
    }
    resolvecss(dataStr)
    resolveJs(dataStr)
    resolveHtml(dataStr)
})

function resolvecss(htmlStr){
    //提取
    const r1 = styleReg.exec(htmlStr)
    console.log(r1[0]);
    
    //处理
    const newCss = r1[0].replace('<style>','').replace('</\style>','')
    fs.writeFile(path.join(__dirname,'./block/index.css'),newCss,'utf-8',function(err){
        if(err){
            return console.log('写入css失败',err.message);
        }
        console.log('写入css成功');
        
    })
}
function resolveJs(htmlStr){
    //提取
    const r2 = scriptReg.exec(htmlStr)
    console.log(r2);
    //处理
    const newJs = r2[0].replace('<script>','').replace('</\script>','')
    fs.writeFile(path.join(__dirname,'./block/index.js'),newJs,'utf-8',function(err){
        if(err){
            return console.log('写入js失败');
        }
        console.log('写入js成功');
    })
}

function resolveHtml(htmlStr){
    const newHtml = htmlStr.replace(styleReg,'<link rel="stylesheet" href="./index.css"/>').replace(scriptReg,"<script src='./index.js'></script>")
    fs.writeFile(path.join(__dirname,'./block/index.html'),newHtml,'utf-8',function(err){
        if(err){
            return console.log('写入失败');
        }
        console.log('写入成功');
        
    })
}


