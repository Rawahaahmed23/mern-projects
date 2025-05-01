const mongoose = require('mongoose')
const bcrypt = require('bcrypt');



const userSchema = new  mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    email:{
      type: String,
      required: true,
      unique:true
    },
    phone:{
     type: String,
     required:true
    },
    password:{
      type:String,
      required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
      }
})

userSchema.pre('save', async function(next) {
    try{
        const user = this
        if(!user.isModified){
          return next()
        }
        const saltRound = await bcrypt.genSalt(10)
        const hashpassowrd = await bcrypt.hash(user.password, saltRound)
        user.password = hashpassowrd
        
    } catch(error){
        return next(error)
    }
}
)

userSchema.methods.comparePassword= async function (password) {
    return bcrypt.compare(password, this.password);
}






const User = mongoose.model('user',userSchema)

module.exports = User