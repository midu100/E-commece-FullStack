const express = require('express')
const { checkOut, getAllOrders, getOrderDetails, updateOrderStatus } = require('../controllers/orderController')
const roleCheckMiddleware = require('../middleware/roleCheckMiddleware')
const route =express.Router()

route.post('/checkout',checkOut)
route.get('/orders', roleCheckMiddleware('admin', 'editor'), getAllOrders)
route.get('/orders/:id', roleCheckMiddleware('admin', 'editor'), getOrderDetails)
route.put('/orders/:id/status', roleCheckMiddleware('admin', 'editor'), updateOrderStatus)

module.exports = route