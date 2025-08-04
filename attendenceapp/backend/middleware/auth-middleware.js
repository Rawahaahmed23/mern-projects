
const jwt = require('jsonwebtoken')
const User = require('../model/userSchema');



const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({ msg: 'token missing' });
  }

  try {
   
    
  
    const userdata = jwt.verify(token, process.env.JWT_SELECT_KEY);

    const user = await User.findById(userdata.userId).select({ password: 0 });
    req.user = user;
    req.token = token;
    req._id = userdata._id;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ msg: 'invalid token' });
  }
};



module.exports = authMiddleware