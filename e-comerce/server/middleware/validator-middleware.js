const validate = (schema) => async (req, res, next) => {
  try {
  const parsedBody = await schema.validate(req.body, { abortEarly: false });
    req.body = parsedBody;
    next();
  } catch (err) {
   
    const status = 422;
    const massage = 'fill the input properly'
    const extraDetails = err.errors[0].message
    console.log(extraDetails);
    
    

    
    const error = {
      status,
      massage,
      extraDetails,
      
      
    }
     next(error)
       
  }
};

  
  module.exports = validate

