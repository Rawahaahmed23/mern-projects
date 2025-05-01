require('dotenv').config();
const express = require("express")
const bcrypt = require('bcrypt');
const app = express()
const authroute = require('./router/auth-api')
require('dotenv').config(); // This must be at the very top
const connectDB = require('./utils/db');

// Your other requires and code...

connectDB();
app.use(express.json());

const Port = 5000




app.use('/api/router', authroute);



connectDB().then(()=>{

    app.listen(Port,()=>{
        console.log(`server is starting ${Port}`);
        
    })
})