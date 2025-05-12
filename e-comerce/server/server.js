require('dotenv').config(); 
const express = require("express");
const bcrypt = require('bcrypt');
const app = express();
const authroute = require('./router/auth-api');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');


app.use(express.json());

// Routes
app.use('/api/router', authroute);


app.use(errorMiddleware);


const PORT = 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed!", err);
  });