const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,  
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  phone: {
    type: String,
    required: true,
  },
  password: {  
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }



});


userschema.pre("save", async function () {
  const user = this;
  console.log("actual data ", this);

  if (!user.isModified) {
    return next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashedPassword;
  } catch (error) {
    return next(error);
  }
});

userschema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
}

// userschema.pre('save',async function (next) {
  
// const user = this;
// if (!user.isModified) {
//   return next();
// }
// try{
// const salt =await bc.gensalt(10)

// const hash = await bcrypt.hash(user.password, salt)
// user.password= hash
// }catch(error){
//  return next(error)
// }
    
// })


userschema.methods.generateToken= async function () {
  try{
    return  jwt.sign({
      userid:this._id.toString(),
      email: this.email,
      isAdmin: this.admin
    },
    process.env.JWT_SELECT_KEY,{
      expiresIn:"30d",
    }
  )

  }catch(error){
     console.log(error);
     
  }
}
const User = mongoose.model("User", userschema); // "new mongoose.model" galat syntax hai
module.exports = User;
