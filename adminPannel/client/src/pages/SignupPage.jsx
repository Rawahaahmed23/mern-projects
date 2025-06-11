import React, {  useState } from 'react';
import {toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';


const SignupPage = () => {


  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
     phone: ''
  });


const { storedTokenINS } = useAuth();

  const Navigate = useNavigate(); // ✅ VAL
  const handleChange = (e) => {
        e.preventDefault()
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Optional: Password match check
 

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      const data = await response.json();
      console.log(data);
      
      
      if(response.ok){
         toast.success('Register sucessful')
        storedTokenINS(data.token)
        
         setUser({
           username: '',
    email: '',
    password: '',
     phone: ''
        })
        Navigate('/login')
       }else{
             toast.error(data?.extraDetails?.message || data?.massage)  
       }
   
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <form onSubmit={handleSignup} className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-200">Sign up to get started</p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="username"
              className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <input
              type="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="phone"
              className="w-full pl-12 pr-12 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

        

          <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Create Account
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-200">
            Already have an account?
            <a href="#" className="text-white hover:text-blue-200 ml-1">Sign In</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
