const express = require('express')
const route = express.Router()
const authRoute = require('./auth') 
const categoryRoute = require('./category')
const productRoute = require('./product')
const orderRoute = require('./order')
const { authMiddleware } = require('../middleware/authMiddleware')
const roleCheckMiddleware = require('../middleware/roleCheckMiddleware')


route.get('/',(req,res)=>{
    res.send('hello')
}) 


route.use('/auth',authRoute)
route.use('/category',categoryRoute)
route.use('/product',productRoute)
route.use('/cart',authMiddleware,require('./cart'))
route.use(authMiddleware,orderRoute)
route.use('/users',authMiddleware,roleCheckMiddleware('admin','editor'),require('./users'))



module.exports = route














