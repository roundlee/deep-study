const fs = require('fs');
const path = require('path');
/**
 * readFile() 读取文件
 * 参数1:文件存放路径
 * 参数2:文件的编码格式
 * 参数3：回调函数
 */
console.log(path.join(__dirname,'../'));
console.log(__dirname);



fs.readFile(path.join(__dirname,'../data/data.txt'), 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取失败', err.message);
    }
    console.log('文件读取成功');
    
    
})

/**
 * writeFile() 写入文件内容
 * 参数1:文件存放路径
 * 参数2:需要写入的内容
 * 参数3：写入内容的格式--默认utf-8
 * 参数4:文件写入完成后的回调函数
 */
fs.writeFile(path.join(__dirname,'../data/data-old.txt'), '木子=74 凉凉=86 情书=44', 'utf-8', function (err) {
    if (err) {
        return console.log('文件写入失败', err.message);
    }
    console.log('文件写入成功');
})
