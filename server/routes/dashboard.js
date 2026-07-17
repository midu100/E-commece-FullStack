const express = require('express')
const { getDashboardStats } = require('../controllers/dashboardController')
const route = express.Router()

route.get('/stats',getDashboardStats)

module.exports = route
