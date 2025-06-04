const User = require('../models/userSchema');

const getUserStats = async (req, res, next) => {
  try {
  const totalUsers = await User.countDocuments();
const activeUsers = await User.countDocuments({ isOnline: true });
const inactiveUsers = totalUsers - activeUsers;

    
        const recentLogins = await User.find({}, 'username email lastLogin').sort({ lastLogin: -1 }).limit(10);

    res.status(200).json({
      totalUsers,
      activeUsers,
      inactiveUsers,
      recentLogins
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserStats };
