// validate middleware में सुधारें
const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const yupError = err.errors?.[0] || "Validation failed";
    const error = {
      status: 422, // Typically 422 for validation errors
      message: 'Validation Error',
      extraDetails: yupError|| yupError // Yup errors have messages
    };
    next(error);
  }
};

module.exports = validate