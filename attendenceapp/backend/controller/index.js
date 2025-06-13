 const cloudinary = require('../config/cloudery')
const User= require('../model/userSchema')




const register = async (req, res) => {
  try {
    const { name, role, phoneNumber, email, profileImage,password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const uploadResult = await cloudinary.uploader.upload(profileImage, {
      folder: 'user_profiles',
      public_id: `${name}_profile_${Date.now()}`

    });

    const userCreate = await User.create({
      name,
      role,
      phoneNumber,
      password,
      email,
    profileImage: {
    public_id: uploadResult.public_id,
    url: uploadResult.secure_url
  }
    });

    res.status(200).json({ msg: 'Registration Successful' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server Error' });
  }
};




 const login = async(req,res)=>{
    try{

        const {email,password}= req.body
        const validemail = await User.findOne({email})
        if(!validemail){
         res.status(200).json({msg: 'Unauhterized email'})
        }
        const compare = await validemail.comparePassword(password)
         if(compare){
         return   res.status(200).json({msg:'login successful'})
         }
    }catch(error){
        console.log(error);
        
    }
 }



 module.exports= {register,login}