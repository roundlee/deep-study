console.log('自定义模块');
// 测试模块作用域
const username = '木子'
function say(){
    console.log('hello'+ username);
    
}

// 在一个自定义模块中 module.exports = {}
module.exports.username1 = 'nihao'
module.exports.say1 = () => {
    console.log('hello'+ this.username1);
    
}
// 让module.exports只想一个全新的对象
module.exports = {
    name:'木子',
    sayHi: () => {}
}
// console.log(exports);



