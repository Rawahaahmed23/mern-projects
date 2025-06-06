const User = require('../models/user-model')
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

   
    const isPasswordValid = await userExist.comparePassword(password)

    if (isPasswordValid) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "incorrect email passowrd" });
    }
  } catch (error) {
    res.status(500).send(error)
   next(error)
  }
};

const home = async (req, res)=>{
    try{
        res.status(200).send('welcome bro bbuddy you are my hero')  
    }
    catch(error){
        res.status(400).send('page not found')
    }
}





const register = async (req,res)=>{
    try{
     
     const {username,email,password,phone}=req.body
     
const userexist = await User.findOne({email:email})
console.log(req.body);
  
      if(userexist){
       
         return res.status(400).json({message:"user already exisir"})
      }

      
    

     
  const userCreated = await User.create({ username, email, phone, password});


res.status(201).json({
  msg: "Registration Successful",
  token: await userCreated.generateToken(),
  userId: userCreated._id.toString(),
});


    
      
  
    }
    catch(error){
        res.status(500).send(error)
    }
  }




 
  


// user data form bakend 

const user = async (req, res) => {
  try {


    const userData = req.user;
    

    return res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};





module.exports= {home, register,login, user }




// const register = async (req, res) => {
  //     try {
  //       // const data = req.body;
  //       console.log(req.body);
  //       const { username, email, phone, password } = req.body;
    
  //       const userExist = await User.findOne({ email: email });
    
  //       if (userExist) {
  //         return res.status(400).json({ msg: "email already exists" });
  //       }
    
  //       const userCreated = await User.create({ username, email, phone, password });
    
  //       // res.status(201).json({ message: "User registered successfully" });
  //       res.status(201).json({ msg: userCreated });
  //     } catch (error) {
  //       res.status(500).json({ message: "Internal server error" });
  //     }