import React, { useState, useEffect } from 'react'
import { useAuth } from '../store/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminUpdate() {
  const { AuthrizationToken } = useAuth();
  const params = useParams();
  
  const [data, setdata] = useState({
    username: "",
    email: "",
    phone: ''
  });

  const getUbadateAll = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
        method: "GET", 
        headers: {
          Authorization: AuthrizationToken,
        },
      });
      const userData = await response.json();
      console.log(userData);
      
      setdata(userData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
          const response = await fetch(`http://localhost:5000/api/admin/users/ubdate/${params.id}`, {
        method: "PATCH",
        headers: {
              "Content-Type": "application/json",
          Authorization: AuthrizationToken
        },
        body:JSON.stringify(data)
      }); 
 

      if(response.ok){
        toast.success('ubdate sucessfuly')
      }else{
        toast.error('fail')
      }

      
         
    }catch(error){
        console.log(error);
        
    }
  }
   
  useEffect(() => {
    getUbadateAll();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">User edit</h2>
            <p className="text-gray-600">Edit user information</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={data.username}
                onChange={handleInput}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-400"
                placeholder="Enter username"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleInput}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-400"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={data.phone}
                onChange={handleInput}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-400"
                placeholder="Enter phone number"
                required
              />
            </div>

            <div className="flex gap-4 pt-6">
              
              <button
                type="button"
                className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminUpdate