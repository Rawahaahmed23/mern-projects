import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../store/auth';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend ,ResponsiveContainer} from 'recharts';

import { Users, UserCheck, UserX, Clock} from 'lucide-react';


function AdminAnalytics() {

  const {AuthrizationToken}= useAuth()

  const [data,setdata]=useState({
totalUsers: '',
activeUsers: '',
inactiveUsers: '',
recentLogins:'',

  })
    const getUbadateAll = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users`, {
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

  useEffect(()=>{
getUbadateAll()
  } ,[])


    const chartData = [
    { name: 'Total Users', value: data.totalUsers },
    { name: 'Active Users', value: data.activeUsers },
    { name: 'Inactive Users', value: data.inactiveUsers },
    { name: 'Recent Logins', value: data.recentLogins?.length || 0 }
  ];
 
   const StatCard = ({ title, value, icon: Icon, color, bgColor }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <p className={`text-3xl font-bold ${color}`}>
            {value.toLocaleString()}
          </p>
        </div>
        <div className={`p-3 rounded-full ${bgColor}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Analytics Dashboard</h1>
          <p className="text-gray-600">Monitor user statistics and activity</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value={data.totalUsers}
            icon={Users}
            color="text-blue-600"
            bgColor="bg-blue-500"
          />
          <StatCard
            title="Active Users"
            value={data.activeUsers}
            icon={UserCheck}
            color="text-green-600"
            bgColor="bg-green-500"
          />
          <StatCard
            title="Inactive Users"
            value={data.inactiveUsers}
            icon={UserX}
            color="text-red-600"
            bgColor="bg-red-500"
          />

        
           <StatCard
    title="Recent Logins"
    value={data.recentLogins.length} 
    icon={Clock}
    color="text-yellow-600"
    bgColor="bg-yellow-500"
  />
        </div>

          <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    
    
      </div>

       <div className="min-h-screen bg-gray-50 p-6">
      {/* ... existing header and stat cards ... */}
      
      {/* Bar Chart Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg mt-8" style={{ height: '400px' }}>
        <h2 className="text-xl font-semibold mb-4">User Statistics</h2>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart 
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="value" 
              fill="#8884d8" 
              name="User Count"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>


  );
}



export default AdminAnalytics