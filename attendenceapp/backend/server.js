require('dotenv').config();

const express = require('express')
const cors = require('cors');
const app = express()


const cookieParser = require("cookie-parser");
app.use(cookieParser());




const corsoption ={
      origin: 'http://localhost:5173',
       methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
      credentials: true
        
  
}
app.use(cors(corsoption))
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
