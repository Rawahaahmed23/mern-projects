require('dotenv').config();
const express = require('express');
const app = express();
const aiRoutes = require('./src/router/Api-routes');

const port = 5000;

app.use(express.json());
app.use('/api', aiRoutes); // route prefix

app.listen(port, () => {
    console.log(`server started at ${port}`);
});
