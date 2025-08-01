require('dotenv').config();

const express = require('express')
const cors = require('cors');
const app = express()


const cookieParser = require("cookie-parser");
app.use(cookieParser());




const corsOptions = {
  origin: [
    'https://mern-projects-ncy2.vercel.app'
    
    'http://localhost:5173',
  ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
  credentials: true,
};
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
