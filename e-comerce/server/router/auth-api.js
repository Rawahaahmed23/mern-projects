const express = require('express')
const app = express()
const router = express.Router();
const main = require('../controller/controller');
const  validate  = require('../middleware/validator-middleware');
const signupSchema = require('../validator/validation');



router.route('/register').post(validate(signupSchema),main.register)
router.route('/login').post(main.login)



module.exports = router