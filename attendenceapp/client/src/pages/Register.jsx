import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "@/store/useAuth";

function Register() {

  const {saveToken} =useAuth()
  const [image,setimage] = useState(" ")
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    profileImage: null,
    checkIn: "",
    role: "",
  });


  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };



 const handleInput = async (e) => {
  e.preventDefault();

  try {
    // Step 1: Upload image to Cloudinary
    const formData = new FormData();
    formData.append("file", image); // ✅ fixed: using image state
    formData.append("upload_preset", "rawaha");
    formData.append("cloud_name", "dtx7n84vi");

    const res = await fetch("https://api.cloudinary.com/v1_1/dtx7n84vi/image/upload", {
      method: "POST",
      body: formData,
    });

    const cloudData = await res.json();
 

    // Step 2: Send form to backend
    const finalData = {
      ...data,
      profileImage: cloudData.secure_url, 
    };

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
     credentials: "include", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    });

    const result = await response.json();
     if(response.ok){
       toast.success("registration of sucessful")
    console.log("📦 Token from backend:", result.token);
saveToken(result.token);
     }else{
      
  // Backend ne error bheja, usi se toast.error
  toast.error(result.extraDetails?.message || result.message || "Registration failed");
}
     

  } catch (error) {
console.log(error);


  }
};

  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-4 bg-[#1a1a1a]">
      <div className="w-full max-w-md rounded-xl shadow-2xl p-8">
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-[#00d4aa] rounded-full mr-4"></div>
          <h1 className="text-2xl font-bold text-white">Employee Registration</h1>
        </div>

        <form className="space-y-6" onSubmit={handleInput}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={data.name}
              onChange={handlechange}
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-[#3a3a3a] border border-[#4a4a4a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handlechange}
              value={data.email}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#3a3a3a] border border-[#4a4a4a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              name="phoneNumber"
              type="tel"
              placeholder="03XX-XXXXXXX"
              value={data.phoneNumber}
              onChange={handlechange}
              required
              className="w-full px-4 py-3 bg-[#3a3a3a] border border-[#4a4a4a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={handlechange}
              required
              className="w-full px-4 py-3 bg-[#3a3a3a] border border-[#4a4a4a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]"
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm text-gray-300 mb-2">
              Role
            </label>
            <input
              id="role"
              name="role"
              type="text"
              placeholder="e.g., Manager, Developer"
              value={data.role}
              onChange={handlechange}
              required
              className="w-full px-4 py-3 bg-[#3a3a3a] border border-[#4a4a4a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]"
            />
          </div>

          {/* Profile Image */}
          <div>
            <label htmlFor="profileImage" className="block text-sm text-gray-300 mb-2">
              Profile Picture
            </label>
            <input
              id="profileImage"
              name="profileImage"
              type="file"
              accept="image/*"
              onChange={(e)=>{setimage(e.target.files[0])}}
              required
              className="w-full bg-[#3a3a3a] text-gray-300 border border-[#4a4a4a] rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#00d4aa] file:text-white hover:file:bg-[#00c7a0]"
            />
          </div>

          {/* Check-In Time */}
          <div>
            <label htmlFor="checkIn" className="block text-sm text-gray-300 mb-2">
              Check-In Time
            </label>
            <input
              id="checkIn"
              name="checkIn"
              type="text"
              value={data.checkIn}
              onChange={handlechange}
              placeholder="Enter check-in time"
              className="w-full px-4 py-3 bg-[#3a3a3a] border border-[#4a4a4a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]"
            />  
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg text-white font-semibold bg-[#00d4aa] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:ring-offset-2"
          >
            Register Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
