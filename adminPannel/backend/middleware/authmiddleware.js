const jwt = require("jsonwebtoken");
const User = require('../models/userSchema');

const authmiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(400).json({ msg: "Token missing" });
    }

    const jwttoken = token.replace('Bearer', "").trim();

    try {
        const userData = jwt.verify(jwttoken, process.env.JWT_SELECT_KEY);

        const users = await User.find().select({ password: 0 }); 
        const totalUsers = users.length;
        const activeUsers = users.filter(user => user.isActive).length;
        const inactiveUsers = totalUsers - activeUsers;
        const recentLogins = users.slice(0, 10); // dummy logic

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next(); 

    } catch (error) {
      
        return res.status(401).json({ message: "Unauthorized. Invalid token." });
    }
};

module.exports = authmiddleware;
