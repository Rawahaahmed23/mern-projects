const jwt = require("jsonwebtoken");
const User = require('../models/userSchema');

const authmiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(400).json({ msg: "Token missing" });
    }

    const jwttoken = token.replace('Bearer', "").trim();

    try {
        const isverified = jwt.verify(jwttoken, process.env.JWT_SELECT_KEY);
        const userData = await User.findOne({ email: isverified.email }).select({ password: 0 });

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next(); 
        next(); 
    } catch (error) {
        console.log(error);
        
        return res.status(401).json({ message: "Unauthorized. Invalid token." });
    }
};

module.exports = authmiddleware;