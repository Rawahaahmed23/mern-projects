const User=  require('../models/user-schema')






const register = async(req,res,next)=>{
  try{
     const {username,email,password,phone} = req.body
   const userExsist = await User.findOne({email:email})
     if(userExsist){
        res.status(401).json({msg: 'user already exisist'})
     }
   
     const userCreated = await User.create({username,email,password,phone})
     res.status(200).json({
      msg:'register sucessful'
     })

  }catch(error){
    console.log(error);
    
  }
  
}

const login = async(req,res)=>{
   try{
      const {email,password} = req.body
      const userExist = await User.findOne({email:email})
      if(!userExist){
         res.status(400).json({msg:'inavlid cradential'})
      }
      const isPasswordValid = await userExist.comparePassword(password)
      if(isPasswordValid){
         res.status(200).json({msg:'login Sucessful'})
      }else {
         res.status(400).json({ msg: 'invalid credentials' });
     }
      
    

   }catch(error){
   console.log(error);
   
   }
}



module.exports = {register,login}