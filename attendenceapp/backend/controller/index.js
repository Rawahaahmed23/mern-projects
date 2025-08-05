const cloudinary = require("../config/cloudery");
const User = require("../model/userSchema");

const register = async (req, res, next) => {
  try {

    
    const {
      name,
      role,
      phoneNumber,
      email,
      profileImage,
      password,
      checkInLimit,
    } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const uploadResult = await cloudinary.uploader.upload(profileImage, {
      folder: "user_profiles",
      public_id: `${name}_profile_${Date.now()}`,
    });

    const userCreate = await User.create({
      name,
      role,
      phoneNumber,
      password,
      email,
      checkInLimit,
      profileImage: {
        public_id: uploadResult.public_id,
        url: uploadResult.secure_url,
      },
    });

    res.status(200).json({
      message: "registration Sucessful",
      token : await userCreate.generateToken(),
      userId: userCreate._id.toString(),
    });
  } catch (error) {
 console.log(error);
 
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const validemail = await User.findOne({ email });

    if (!validemail) {
      return res.status(401).json({ message: "Unauthorized email" });
    }

    const compare = await validemail.comparePassword(password);

    if (!compare) {
      return res.status(401).json({ message: "Invalid password" });
    }

  

    // Cookie set karo
 

 const token = await validemail.generateToken();

res.cookie("token", token, {
  httpOnly: true,
  secure: true,        
  sameSite: "None",     
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

return res.status(200).json({
  message: "Login Successful",
  userId: validemail._id.toString(),
});
  } catch (error) {
    console.log(error);

  }
};



const user = async (req, res) => {
  try {
    const loggedInUser = req.user;

    const getuser = await User.findById(loggedInUser._id).select("-password");
  
    res.status(200).json({ user: getuser });
  } catch (error) {
    console.error("User route error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


const checkIn = async (req, res) => {
  try {
    const userID = req.user._id;
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

const options = {
  timeZone: "Asia/Karachi", // ✅ Set to Pakistan time
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

const currentTime = now.toLocaleString("en-US", options); // e.g. "1:02 PM"

    const todayDate = now.toISOString().split("T")[0]; // only date part

    const alreadyCheckedIn = user.attendanceHistory.some((entry) => {
      const entryDate = new Date(entry.date).toISOString().split("T")[0];
      return entryDate === todayDate;
    });

    if (alreadyCheckedIn) {
      return res.status(400).json({ message: "Already checked in today" });
    }

    const checkInLimit = user.checkInLimit; // default if not set
    const isLate = currentTime > checkInLimit;
    
  
    
    const status = isLate ? "Late" : "On Time";

    // Push check-in record
    user.attendanceHistory.push({
      date: now,
      status,
      checkInTime: currentTime,
    });

    user.totalAttendance += 1;
    user.checkInTime = currentTime;

    await user.save();

    res.status(200).json({
      message: "Check-in successful",
      checkInTime: currentTime,
      status,
    });
  } catch (error) {
    console.error("Check-in Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};




const cheakout = async (req, res) => {
  try {
    const userid = req.user._id;
    const user = await User.findById(userid);

    const today = new Date();
    let hours = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    const formattedHours = String(hours).padStart(2, "0");

    const currentTime = `${formattedHours}:${minutes} ${ampm}`;
    const todayDate = today.toISOString().split("T")[0];

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

  
    const todayAttendance = user.attendanceHistory.find((a) => {
      const d = new Date(a.date).toISOString().split("T")[0];
      return d === todayDate && a.checkOutTime === null;
    });

    if (!todayAttendance) {
      return res.status(400).json({ message: "No valid check-in found or already checked out" });
    }

    todayAttendance.checkOutTime = currentTime;
    user.checkOutTime = currentTime
    user.markModified("attendanceHistory");

    await user.save();

    res.status(200).json({
      message: "Check-out successful",
      checkOutTime: currentTime,
      attendanceHistory: user.attendanceHistory,
    });
  } catch (error) {
    console.error("Check-out error:", error);
    res.status(500).json({ message: "Server error" });
  }
};




module.exports = { register, login, user, checkIn, cheakout,};
