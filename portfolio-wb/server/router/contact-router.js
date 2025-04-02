const express = require("express")
const route = express.Router()
const contactForm = require('../controller/contact-controller')



route.route('/contact').post(contactForm)

module.exports = route