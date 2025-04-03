const demo = require('./demo') // 得到的是module.exports 对象
const moment = require('moment')
console.log(demo);

const date = new Date()
console.log(moment(date).format('YYYY-MM-DD HH:mm:ss'));

