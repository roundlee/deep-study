const express = require('express')
const router = express.Router()

// 挂砸路由

router.get('/user/list',(req,res) => {
    res.send('GET user list')
})

router.post('/user/add',(req,res) => {
    res.send('POST user add')
})

// 导出路由

module.exports = router
