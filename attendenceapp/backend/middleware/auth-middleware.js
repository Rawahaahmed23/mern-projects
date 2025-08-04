
const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const authMiddleware = async (req, res, next) => {
  try {
    // Check both Authorization header and cookies
 
    

      let token = req.cookies.token;
    

    if (!token) {
      return res.status(401).json({ msg: 'Authentication required' });
    }


    if (token.startsWith('Bearer ')) {
      token = token.split(' ')[1];
    }

    const userdata = jwt.verify(token, process.env.JWT_SELECT_KEY);
    const user = await User.findById(userdata.userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.log('JWT Error:', error.message);
    
    // Specific error messages
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ msg: 'Session expired' });
    }
    return res.status(401).json({ msg: 'Invalid credentials' });
  }
};

module.exports = authMiddleware;