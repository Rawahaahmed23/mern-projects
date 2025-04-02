
const {Schema, model}= require('mongoose')


const contactScehma =  new Schema({
    username:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true,
       
    },
    messgae:{
       type: String,
       require: true
    }
})

const contact = new model('contact',contactScehma)
module.exports = contact