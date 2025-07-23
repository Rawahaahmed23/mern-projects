const express = require('express')
const Routes = express.Router()
const main = require('../controller/adminController')
const adminMiddleware = require('../middleware/adminMiddleware')

const authMiddleware = require('../middleware/auth-middleware')




Routes.route('/user').get(authMiddleware,adminMiddleware, main.getuserstats)



module.exports =Routes