const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'../data/data-old.txt'), 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取失败', err.message);
    }
    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=',':'))
    })
    const arrStr = arrNew.join('\r\n')
    fs.writeFile(path.join(__dirname,'../data/data-finish.txt'),arrStr,function(err){
        if(err){
            return console.log('写入失败',err.message);
        }
        console.log('写入成功');
        
    })
    
})