const yup = require("yup");
const { object, string } = yup;

const signupSchema = yup.object({
  username: string()
    .required("Username is required")
    .trim()
     .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),

  email: string()
    .required("email is required")
    .trim()
     .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: string()
    .required("password is required")
    .trim()

        .min(6, { message: "Password must be at least 6 characters" }) 
    .max(1024, { message: "Password must not be more than 1024 characters" }),
  phone: string()
    .required("Number is required")
    .trim()
      .min(10, { message: "Phone must be at least 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
});


module.exports = signupSchema