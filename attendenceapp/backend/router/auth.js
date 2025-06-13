const express = require('express')
const Route = express.Router()
const main = require('../controller/index')



Route.route('/register').post(main.register)
Route.route('/login').post(main.login)



module.exports = Route