const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next(); 
  } catch (err) {
   
    const status = 422;
    const massage = 'fill the input properly'
    const extraDetails = err.errors[0].message
    const error = {
      status,
      massage,
      extraDetails,
      
      
    }
    next(error)
  
  }
};

  
  module.exports = validate

// const validate = (schema) => async (req, res, next) => {
//     try {
//       const parseBody = await schema.parseAsync(req.body);
//       req.body = parseBody;
//       return next();
//     } catch (err) {
//       const status = 422;
//       const message = "Fill the input properly";
//       const extraDetails = err.issues.map((curElem) => curElem.message);
  
//       const error = {
//         status,
//         message,
//         extraDetails,
//       };
  
//       next(extraDetails);
//     }
//   };
  
//   module.exports = validate;