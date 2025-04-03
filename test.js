const i = require('./roundlee-tools')

console.log(i.dateFormat(new Date()));

const htmlStr = '<h1 title="ab">这是一个标签<span>123&nbsp;</span></h1>'
const str = i.htmlEscape(htmlStr)
console.log(str);
const unstr = i.htmlUnEscape(str)
console.log(unstr);


