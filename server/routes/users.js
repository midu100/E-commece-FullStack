const express = require('express')
const { getUsers } = require('../controllers/userController')
const route = express()

route.get('/get',getUsers)

module.exports = route