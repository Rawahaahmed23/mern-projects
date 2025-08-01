require('dotenv').config();

// Debug logging for Railway deployment
// console.log('=== RAILWAY DEPLOYMENT DEBUG ===');
// console.log('Current working directory:', process.cwd());
// console.log('__dirname:', __dirname);
// console.log('Process argv:', process.argv);
// console.log('NODE_ENV:', process.env.NODE_ENV);
// console.log('PORT from env:', process.env.PORT);
// console.log('================================');

const express = require('express')
const cors = require('cors');
const app = express()


const cookieParser = require("cookie-parser");




const corsOptions = {
  origin: [
    'https://mern-projects-gu23.vercel.app',
    
    'http://localhost:5173',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
  credentials: true,
};
app.use(cookieParser());
app.use(cors(corsOptions))
app.use(express.json());
const errormiddleware = require('./middleware/errormiddleware')
const authRoute = require('./router/auth')
const adminRoute = require('./router/adminRoutes')
const connecdb = require('./utils/db')



const Port = process.env.PORT || 5000
app.use('/',authRoute)
app.use('/admin', adminRoute)

app.use(errormiddleware)

connecdb().then(()=>{
    app.listen(Port,()=>{
    console.log(`Server started at ${Port}`);
    console.log('Environment:', process.env.NODE_ENV || 'development');
    
})
}).catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
})
