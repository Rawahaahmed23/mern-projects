import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login= () => {

 const [user,setUser]= useState({
     email: "",
    password:""
 })
const handlechnge=(e)=>{
    e.preventDefault()

  setUser({...user,[e.target.name]:e.target.value})
}

const { storedTokenINS } = useAuth();
  const handleinput = async(e)=>{
    e.preventDefault()
    try{
    const response = await fetch(`http://localhost:5000/api/login`,{
      method:"POST",
      headers:{
           "Content-Type": "application/json"
      },
       body: JSON.stringify(user), // ✅ Add this line
    })
     const data = await response.json()
     console.log(data);
     
    if(response.ok){
      toast.success('Login sucessful')
    storedTokenINS(data.token)
      setUser({
           email: "",
    password:""
      })
      navigate('/')
      

    }else{
      
      toast.error(data?.extraDetails?.message || data?.message)
    }
    }catch(error){
      console.log(error);
      
    }
  }

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-200">Sign in to your account</p>
        </div>

 <form className="space-y-6" onSubmit={handleinput}>
          <div>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <input
                  name='email'
                type="email"
                value={user.email}
                onChange={handlechnge}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                type="password"
                name='password'
                onChange={handlechnge}
                value={user.password}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
            </div>
          </div>

          
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-200">
            Don't have an account? 
              <Link
    to="/"
    className="text-white hover:text-blue-200 ml-1 transition-colors"
  >
    Sign Up
  </Link>

          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;