const path = require('path')
/**
 * path模块是用来对文件路径进行处理
 * path.join()
 * join方法中在拼接的过程中，参数'../'会抵消前一个文件夹
 */
console.log(path.join('a','b/c','../../d'));
/**
 * path.basename() 获取文件名中的部分信息
 */
const fpath = 'a/b/c.html'
console.log(path.basename(fpath));
console.log(path.basename(fpath,'.html'));

/**
 * path.extname() 获取文件扩展名
 */
console.log(path.extname(fpath));




 
