const express = require('express')
const route = express.Router()
const authRoute = require('./auth') 
const categoryRoute = require('./category')
const productRoute = require('./product')
const orderRoute = require('./order')
const { authMiddleware } = require('../middleware/authMiddleware')


route.get('/',(req,res)=>{
    res.send('hello')
}) 


route.use('/auth',authRoute)
route.use('/category',categoryRoute)
route.use('/product',productRoute)
route.use('/cart',authMiddleware,require('./cart'))
route.use(authMiddleware,orderRoute)



module.exports = route














