// error-middleware.js में सुधारें
const errorMiddleware = async (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Backend error';
  const extraDetails = err.extraDetails || 'Error from backend';

  return res.status(status).json({
    status,
    message, 
    extraDetails
  });
};

module.exports = errorMiddleware