const express = require("express")
const route = express.Router()
const main = require('../controller/index')

const {signupschema, loginschema} = require("../validator/auth-validator")
const validate = require("../middleware/validate-middleware")
const authmiddleware = require('../middleware/auth-middleware')







route.route("/home").get(main.home)

route.route("/register").post(validate(signupschema),main.register)
route.route("/login").post(validate(loginschema),main.login)

route.route("/user").get(authmiddleware, main.user);



module.exports = route