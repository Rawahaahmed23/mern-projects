const express = require("express")
const route = express.Router()
const main = require('../controller/index')

const signupschema = require("../validator/auth-validator")
const validate = require("../middleware/validate-middleware")






route.route("/home").get(main.home)

route.route("/register").post(validate(signupschema.signupSchema),main.register)
route.route("/login").post(validate(signupschema.loginschema),main.login)


module.exports = route