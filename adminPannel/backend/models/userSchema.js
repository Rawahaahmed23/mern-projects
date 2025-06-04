const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
   
  },
  email: {
    type: String,
    required: true,
    unique: true,
 
  
  },
  password: {
    type: String,
    required: true,
   
  },
  phone:{
   type:Number,
    required: true,
  },
  isActive: {               
    type: Boolean,
    default: true
  },
  registeredAt: {          
    type: Date,
    default: Date.now
  },
  isAdmin: {               
    type: Boolean,
    default: false
  },
  isOnline: {
  type: Boolean,
  default: false
}
 
});


userSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  }
   catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};




userSchema.methods.generateToken= async function () {
  try{
    return  jwt.sign({
      userid:this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_SELECT_KEY,{
      expiresIn:"30d",
    }
  )

  }catch(error){
     console.log(error);
     
  }
}






const User = mongoose.model('User', userSchema);

module.exports = User;




