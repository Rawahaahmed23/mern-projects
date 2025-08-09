const express = require("express");
const app = express();
const userRoutes = require('./Routes/user')



app.use('/api/users', userRoutes);




const Port = 5000

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
})