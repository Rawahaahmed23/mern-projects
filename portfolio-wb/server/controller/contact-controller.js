
const contact = require('../models/contact-model')



const contactForm = async (req, res)=> {

  try{
    const detail = req.body
    if (!detail || Object.keys(detail).length === 0) {
        return res.status(400).json({ msg: "Request body is missing" });
      }
    await contact.create(detail)

    res.status(200).json({msg:"msg go sucessful"})
  }catch(error){
    res.status(500).json({msg:'not deliverd'})
  }
    
}

module.exports = contactForm