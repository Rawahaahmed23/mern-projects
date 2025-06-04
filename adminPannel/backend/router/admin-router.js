const express = require('express')
const router =express.Router()
const main = require('../controller/admin-controller')


router.route('/users').get(main.getUserStats)



module.exports = router