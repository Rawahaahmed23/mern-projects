const express = require('express')
const app = express()
const router = express.Router();
const main = require('../controller/controller')



router.route('/register').post(main.register)
router.route('/login').post(main.login)



module.exports = router