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
      return res.status(400).json({ msg: "User already exists" });
    }

    const uploadResult = await cloudinary.uploader.upload(profileImage, {
      folder: "user_profiles",
      public_id: `${name}_profile_${Date.now()}`,
    });
    let parsedCheckInLimit = checkInLimit;


if (typeof checkInLimit === "string" && checkInLimit.includes(":")) {
  const [hourStr, minuteStr] = checkInLimit.split(":");
  const hours = parseInt(hourStr, 10);
  const minutes = parseInt(minuteStr, 10);

  const now = new Date();
  now.setHours(hours, minutes, 0, 0);
  parsedCheckInLimit = now;
}


    const userCreate = await User.create({
      name,
      role,
      phoneNumber,
      password,
      email,
      checkInLimit: parsedCheckInLimit,
      profileImage: {
        public_id: uploadResult.public_id,
        url: uploadResult.secure_url,
      },
    });

    res.status(200).json({
      msg: "registration Sucessful",
      token: await userCreate.generateToken(),
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
      res.status(200).json({ msg: "Unauhterized email" });
    }
    const compare = await validemail.comparePassword(password);
    if (compare) {
      return res.status(200).json({
        msg: "Login Sucessful",
        token: await validemail.generateToken(),
        userId: validemail._id.toString(),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const user = async (req, res) => {
  try {
    const loggedInUser = req.user;

    const getuser = await User.findById(loggedInUser._id).select("-password");

    console.log(getuser);

    res.status(200).json({ user: getuser });
  } catch (error) {
    console.error("User route error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};



const checkIn = async (req, res) => {
  try {
    const userID = req.user._id;
    const user = await User.findById(userID);
    if (!user) {
      res.status(500).json({ msg: "user not found" });
    }

    const today = new Date();
 const hours = String(today.getHours()).padStart(2, "0");
const minutes = String(today.getMinutes()).padStart(2, "0");

    const todayDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    ); // ✅ correct
    const todaystr = today.toISOString().split("T")[0];
    console.log(todayDate);
    const cheakinTime = user.checkInLimit;

    const alreadyCHeakin = user.attendanceHistory.find((a) => {
      const d = new Date(a.date).toISOString().split("T")[0];
      return d == todaystr;
    });

     if(alreadyCHeakin){
      res.status(400).json({msg:'Already cheak in Today '})

     }
    const checkInLimit = new Date(user.checkInLimit);
    checkInLimit.setFullYear(today.getFullYear());
    checkInLimit.setMonth(today.getMonth());
    checkInLimit.setDate(today.getDate());

    const isLate = today > checkInLimit;
    const status = isLate ? "Late" : "On Time";

const checkInTime = `${hours}:${minutes}`;

    user.attendanceHistory.push({
      date: today,
      status,
      checkInTime: cheakinTime,
    });

   

    user.totalAttendance += 1;


    await user.save();

    res.status(200).json({
      today,
      status,
      checkInTime,
    });
  } catch (error) {
    console.log(error);
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
      return res.status(400).json({ msg: "User not found" });
    }

    const todayAttendance = user.attendanceHistory.find((a) => {
      const d = new Date(a.date).toISOString().split("T")[0];
      return d === todayDate;
    });

    if (!todayAttendance) {
      return res.status(400).json({ msg: "Please check in first" });
    }

    if (todayAttendance.checkOutTime) {
      return res.status(400).json({ msg: "Already checked out today" });
    }

    todayAttendance.checkOutTime = currentTime;

    await user.save();

    res.status(200).json({
      msg: "Check-out successful",
      checkOutTime: currentTime,
    });
  } catch (error) {
    console.log(error);
  }
};



module.exports = { register, login, user, checkIn, cheakout };
