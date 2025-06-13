
const adminMiddleware = async (req, res, next) => {
  try {
    const user= req.user.isAdmin
    if(!user){
      res.status(400).json({msg:'you are not admin'})
    }
    
    if (!user) {
      return res.status(403).json({ msg: "Access Denied: User is not admin" });
    }

    next();
  } catch (error) {
    return next(error); // Typo fixed
  }
};

module.exports = adminMiddleware;
