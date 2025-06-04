
const mongoose = require('mongoose');

const URI = process.env.MONGO_DB_URI;

async function connectDb() {
  try {
    await mongoose.connect(URI);

  } catch (error) {
    console.log('data base errro')
  }
}

module.exports = connectDb;
