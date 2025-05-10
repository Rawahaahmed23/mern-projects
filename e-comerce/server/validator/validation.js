const yup = require("yup");
const { object, string } = yup;

const signupSchema = yup.object({
  username: string()
    .required("Username is required")
    .trim()
    .min(10, "Name must be at least 10 characters")
    .max(255, "Name must not exceed 255 characters"),

  email: string()
    .required("email is required")
    .trim()
    .email("invalid emial adresss")
    .min(3, "Name must be at least 3 characters")
    .max(255, "Name must not exceed 255 characters"),
  password: string()
    .required("password is required")
    .trim()

    .min(6, "Name must be at least 6 characters")
    .max(1024, "Name must not exceed 1024 characters"),
  phone: string()
    .required("Number is required")
    .trim()
    .min(10, "Name must be at least 10 characters")
    .max(20, "Name must not exceed 20 characters"),
});


module.exports = signupSchema