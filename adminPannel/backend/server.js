require('dotenv').config();
const express = require("express");
const app = express()
const port = 5000
const Route = require('./router/authRouter');
const errromildeWare = require('./middleware/error-middleware')
const authRoute =require('./router/authRouter')
const adminRoute = require('./router/admin-router')
var cors = require('cors')
const connectDb = require("./utils/db");






const corsoption ={
      origin: 'http://localhost:5173',
      methods: 'POST, GET , PUT ,DELETE,PATCH,HEAD',
      credentials: true
        
  
}
app.use(cors(corsoption))

app.use(express.json()); // Good to parse JSON bodies

app.use("/api/router", authRoute)
app.use('/api',Route)
app.use('/api/admin',adminRoute)
app.use(errromildeWare);





connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`Server Started at ${port}`);
        
    })

})



