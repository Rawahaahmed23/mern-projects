require('dotenv').config();

const express = require('express')

const app = express()
app.use(express.json());
const errormiddleware = require('./middleware/errormiddleware')
const authRoute = require('./router/auth')
const connecdb = require('./utils/db')



const Port = 5000
app.use('/',authRoute)

app.use(errormiddleware)

connecdb().then(()=>{
    app.listen(Port,()=>{
    console.log(`Server started at ${Port}`);
    
})
})
