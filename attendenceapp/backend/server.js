require('dotenv').config();

const express = require('express')
const cors = require('cors');
const app = express()


const cookieParser = require("cookie-parser");




const corsOptions = {
  origin: [
    'https://mern-projects-vqgp.vercel.app/',  
    'https://mern-projects-production-9252.up.railway.app'
 
    
    
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
};


app.use(cookieParser());
app.use(cors(corsOptions))
app.use(express.json());
const errormiddleware = require('./middleware/errormiddleware')
const authRoute = require('./router/auth')
const adminRoute = require('./router/adminRoutes')
const connecdb = require('./utils/db')



const Port = 5000
app.use('/',authRoute)
app.use('/admin', adminRoute)

app.use(errormiddleware)

connecdb().then(()=>{
    app.listen(Port,()=>{
    console.log(`Server started at ${Port}`);
    
})
})
