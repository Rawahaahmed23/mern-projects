const mongoose = require('mongoose')

// const url = "mongodb://127.0.0.1:27017/mern"
const URI = process.env.MONGODB_URI

mongoose.connect(URI)



const connectdb = async()=>{

    try{
       
        await mongoose.connect(URI)
    }
    catch{
        console.log('failed');
        process.exit(0)
        
    }
}

module.exports = connectdb