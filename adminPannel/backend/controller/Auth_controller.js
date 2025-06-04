const User= require('../models/userSchema')
const bcrypt = require('bcrypt');

const  register= async(req,res)=> {
       try{
           const {username,email,password,phone}=req.body
           const UserExist = await User.findOne({email:email})
           if(UserExist){
           return res.status(400).json({massage:"user already exist"})
           }
    
          const usercreated =await User.create({username,email,password,phone})
         
         
         
         
          res.status(201).json({
  msg: "Registration Successful",
  token: await usercreated.generateToken(),
  userId: usercreated._id.toString(),





});

       }catch(error){
          res.status(500).send(error)
   next(error)
        
       }
}

const login = async (req, res, next) => { // Add `next` parameter
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "User does not exist. Please register first." });
    }

    const isPasswordValid = await userExist.comparePassword(password);
    userExist.isOnline = true;
await userExist.save();

    if (isPasswordValid) {
      return res.status(200).json({
        message: "Login Successful",
         token: await userExist.generateToken(),
  userId: userExist._id.toString(),
  
        
      });
    } else {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
  } catch (error) {
    console.log(error);
  ; 
  }
};


const user = async (req,res,next)=>{
  try{

    const userData = req.user
        return res.status(200).json({userData})
  }  catch(error){
    res.status(400).json({msg:'internal server errro'})
  }  
  

}

module.exports = { register, login,user};
