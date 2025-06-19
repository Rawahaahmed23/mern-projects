
const jwt = require('jsonwebtoken')
const User = require('../model/userSchema');
const authMiddleware = async(req,res,next)=>{
 
   const token = req.header("Authorization");
   if(!token){
    return res.status(400).json({msg:'token missing'})
   }

    const jwttoken = token.replace('Bearer', "").trim();
      try{
        const userdata = jwt.verify(jwttoken ,process.env.JWT_SELECT_KEY)
       const user = await User.findById(userdata.userId).select({password: 0});

      req.user = user;

        req.token = token
        req._id = userdata._id

 
        next()

   }catch(error){
  res.status(400).json({msg:'repsonse'})
   
   }

}


module.exports = authMiddleware