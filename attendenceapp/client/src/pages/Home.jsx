import React, { useState } from 'react'

function Home() {
   const [data,setdata] = useState({
    name: '',
    email: '',
    password: '',
    Phone:'',
    profileImage: null
   })
  const handlechange = async(e)=>{
      e.preventDefault()
    setdata({ ...data , [e.target.name]:e.target.value}) 
  }
   const handleInput = async(req,res)=>{
    try{
    const response = await fetch('http://localhost:5000/register',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
         body: JSON.stringify(data),
    })


      const result = await response.json();
  console.log(result);
      

  if(response.ok){
    console.log('sucess');
    
  }
    }catch(error){
     console.log(error);
     
    }
   }
  return (
    <div 
      className="min-h-screen w-screen flex justify-center items-center p-4" 
      style={{ 
        backgroundColor: '#1a1a1a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <div 
        className="w-full max-w-md rounded-xl shadow-2xl p-8" 
        style={{ 
          backgroundColor: '#2a2a2a',
          transform: 'translateX(0) translateY(0)',
          margin: 'auto'
        }}
      >
        <div className="flex items-center mb-8">
          <div 
            className="w-1 h-8 rounded-full mr-4" 
            style={{ backgroundColor: '#00d4aa' }}
          ></div>
          <h1 className="text-2xl font-bold text-white">Employee Registration</h1>
        </div>
        
        <form className="space-y-6" onClick={handleInput}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={data.name}
              onChange={handlechange}
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-200"
              style={{ 
                backgroundColor: '#3a3a3a', 
                border: '1px solid #4a4a4a',
                focusRingColor: '#00d4aa'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handlechange}
              value={data.email}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-200"
              style={{ 
                backgroundColor: '#3a3a3a', 
                border: '1px solid #4a4a4a',
                focusRingColor: '#00d4aa'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="03XX-XXXXXXX"
              value={data.Phone}
              onChange={handlechange}
              required
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-200"
              style={{ 
                backgroundColor: '#3a3a3a', 
                border: '1px solid #4a4a4a',
                focusRingColor: '#00d4aa'
              }}
            />
          </div> 
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"

              placeholder="Password"
              value={data.password}
              onChange={handlechange}
              required
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-200"
              style={{ 
                backgroundColor: '#3a3a3a', 
                border: '1px solid #4a4a4a',
                focusRingColor: '#00d4aa'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="profileImage" className="block text-sm font-medium text-gray-300 mb-2">
              Profile Picture
            </label>
            <input
              id="profileImage"
              name="profileImage"
              type="file"
              accept="image/*"
              value={data.profileImage}
              onChange={handlechange}
              required
              className="w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:text-white hover:file:bg-opacity-80"
              style={{ 
                backgroundColor: '#3a3a3a', 
                border: '1px solid #4a4a4a',
                focusRingColor: '#00d4aa'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="checkIn" className="block text-sm font-medium text-gray-300 mb-2">
              Check-In Time
            </label>
            <input
              id="checkIn"
              type="text"
              value={data.che}
              placeholder="Enter check-in time"
              className="w-full px-4 py-3 rounded-lg text-gray-400"
              style={{ 
                backgroundColor: '#2a2a2a', 
                border: '1px solid #4a4a4a'
              }}
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200"
            style={{ 
              backgroundColor: '#00d4aa',
              focusRingColor: '#00d4aa',
              focusRingOffsetColor: '#2a2a2a'
            }}
          >
            Register Employee
          </button>
        </form>
        
        {/* Stats Cards */}
       
      </div>
    </div>
  )
}

export default Home