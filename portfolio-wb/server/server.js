require('dotenv').config()
const express = require("express")
const app = express()
var cors = require('cors')

const mongoose = require('./utlils/db')




const authRoute = require("./router/auth-router")

const contactRoute = require("./router/contact-router")
const ServiceRoute = require ('../server/router/service-router')

const errorMiddleware = require('./middleware/error-middleware')


const corsoption ={
      origin: 'http://localhost:5173',
      methods: 'POST, GET , PUT ,DELETE,PATCH,HEAD',
      credentials: true
        
  
}
app.use(cors(corsoption))

app.use(express.json()); // JSON middleware enable karei



app.use("/api/router", authRoute)
app.use('/api/form', contactRoute)
app.use('/api/data', ServiceRoute)
app.use(errorMiddleware)
const Port = 5000



mongoose().then(()=>{
    app.listen(Port,() =>{
        console.log(`server is starting at the ${Port}`)
    })
})

