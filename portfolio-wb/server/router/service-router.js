const express = require('express')
const router =  express.Router()
const Service = require('../controller/service-controller')



router.route('/service').get(Service);

module.exports = router