const express = require('express');
const router = express.Router();
const main = require('../controllers/user')




router.route('/user/:userid').get(main.getUser)













module.exports = router;