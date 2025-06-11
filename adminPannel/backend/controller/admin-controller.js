const User = require('../models/userSchema');

const deleteuserbyid = async(req,res,next)=>{
    try{
     const id =req.params.id
     await User.deleteOne({_id:id})
     res.status(200).json({msg: 'User Deleted suceefuly'})
    }catch(error){
      next(error)
    }
}


const getUserbyid = async (req,res,next)=>{
  try{
         const id = req.params.id;
     const data = await User.findOne({_id:id},{password:0})
     res.status(200).json(data)
    }catch(error){
      console.log(error)
    }
}



const ubdateuserbyId = async(req,res)=>{
    try{
    const id = req.params.id
    const data=req.body
    const ubdateuser = await User.updateOne({_id:id},{$set:data})
    console.log(ubdateuser);
    

    return res.status(200).json(ubdateuser)
    }catch(error){
    console.log(error);
    
    }
}

const getUserStats = async (req, res, next) => {
  try {
    const users = await User.find().select({ password: 0 });
    const totalUsers = users.length;
    const activeUsers = users.filter(user => user.isActive).length;
    const inactiveUsers = totalUsers - activeUsers;

    const recentLogins = users.slice(0, 10);

    return res.status(200).json({
      totalUsers,
      activeUsers,
      inactiveUsers,
      recentLogins
    });

  } catch (error) {
    next(error);
  }
};
module.exports = { getUserStats,deleteuserbyid,getUserbyid ,ubdateuserbyId};
