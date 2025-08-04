
const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const authMiddleware = async (req, res, next) => {
  try {
    // Check both Authorization header and cookies

    let token = req.cookies.token;

    // 2. Validate token presence
    if (!token) {
      return res.status(401).json({ msg: 'Authentication required' });
    }

    // 3. Handle Bearer prefix safely
    if (token.startsWith('Bearer ')) {
      token = token.split(' ')[1];
    }

    // 4. Validate token structure
    if (token.split('.').length !== 3) {
      return res.status(401).json({ msg: 'Malformed token' });
    }

    // 5. Trim and verify
    token = token.trim();
    const userdata = jwt.verify(token, process.env.JWT_SELECT_KEY);
    
    // ... rest of code
  } catch (error) {
    console.log('JWT Error:', error.message);
    // Specific error handling
  }
};

module.exports = authMiddleware;