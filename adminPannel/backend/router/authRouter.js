const express = require('express');
const Route = express.Router();
const main = require('../controller/Auth_controller');
const {loginSchema,signupSchema} =require('../validator/errorschema')
const validate = require('../middleware/validator')
const authMiddleWare = require('../middleware/authmiddleware')

Route.route('/register').post(validate(signupSchema),main.register);
Route.route('/login').post(validate(loginSchema),main.login);
Route.route('/users').get(authMiddleWare ,main.user);




module.exports = Route;
