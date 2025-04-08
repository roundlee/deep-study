// 导入mysql模块
const mysql = require('mysql')

// 建立数据库连接
const db = mysql.createPool({
    host:'127.0.0.1', //数据库IP地址
    user:'root',
    password:'admin123',
    database:'my_db_01' // 指定操作数据库
})

// 测试mysql模块能够正常工作
// 调用db.query()函数，指定执行的sql语句，通过回调函数拿到执行结果
// db.query('select 1',(err,results) => {
//     if(err) return console.log(err.message);
//     // 只要答应出 [ RowDataPacket {'1':1} ] 的结果，就证明数据库连接成功
//     console.log(results);
// })

// 查询数据
// const sqlstr = 'select * from users'
// db.query(sqlstr,(err,results) => {
//     if(err) return console.log(err.message);
//     console.log(results);
    
// })

// 插入数据
// const user = {username:'ni',password:'pcc123'}
// // 执行的SQL语句中美其中英文的？表示占位符
// const sqlstr = 'insert into users (username,password) values (?,?)'
// // 使用数组的形式，以此为？占位符指定具体指
// db.query(sqlstr,[user.username,user.password],(err,results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('插入成功');
        
//     }
    
    
// })

// 便捷方式插入数据 
// const user = {username:'mk',password:'abb123'}
// // 执行的SQL语句中美其中英文的？表示占位符
// const sqlstr = 'insert into users set ?'
// // 使用数组的形式，以此为？占位符指定具体指
// db.query(sqlstr,user,(err,results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('插入数据成功');
//     }
// })

// 更新数据 及便捷方式
// const user = {id:6,username:'aaa',password:'aaaa23'}
// const sqlstr = 'update users set ? where id=?'
// db.query(sqlstr,[user,user.id],(err,results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('更新数据成功');
//     }
// })

// 删除数据
// const sqlstr = 'delete from users where id=?'
// db.query(sqlstr,7,(err , results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('删除数据成功');
//     }
// })

// 标记删除
// 使用delete语句是，会真正的把数据从表中删除，为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。
// 所谓的标记删除，就是在数据表中类似于status字段，使用update来对标记删除字段进行更新，来表示该条数据已经被删除
const sqlstr = 'update users set status=? where id=?'
db.query(sqlstr,[1,6],(err , results) => {
        if(err) return console.log(err.message);
        if(results.affectedRows === 1){
            console.log('删除数据成功');
        }
    })