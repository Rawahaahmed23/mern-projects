
const jwt = require('jsonwebtoken')
const User = require('../model/userSchema');



const authMiddleware = async (req, res, next) => {
 const authMiddleware = async (req, res, next) => {
  try {
    // 1. Check both cookies and authorization header
    let token = req.cookies?.token || req.headers.authorization;
    
    // 2. Handle Bearer token format
    if (token && token.startsWith('Bearer ')) {
      token = token.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ msg: 'Authentication required' });
    }

    // 3. Verify token
    const userdata = jwt.verify(token, process.env.JWT_SELECT_KEY);
    
    // 4. Find user
    const user = await User.findById(userdata.userId).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // 5. Attach to request
    req.user = user;
    req.token = token;
    req.userId = userdata.userId;

    next();
  } catch (error) {
    console.log('Auth Error:', error.message);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ msg: 'Session expired' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ msg: 'Invalid token' });
    }
    res.status(500).json({ msg: 'Authentication failed' });
  }
}
}



module.exports = authMiddleware