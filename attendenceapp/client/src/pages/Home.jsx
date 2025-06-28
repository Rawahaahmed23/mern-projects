

import { useState } from "react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Calendar, Clock, LogOut, Phone, Mail, Grid3X3, List, ArrowUpDown, Filter } from "lucide-react"
import { useAuth } from "@/store/useAuth"
import { data, NavLink } from "react-router-dom"



export default function Home() {
  const [viewMode, setViewMode] = useState("grid")

  const [currentPage, setCurrentPage] = useState(1)
  const [isCheckedIn, setIsCheckedIn] = useState(false)
   const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const { user} = useAuth()

  

  const handleCheckIn = async() => { 
  try{
    
    const response = await fetch('http://localhost:5000/cheakin',{
     method: 'POST',
     headers:{

  "Content-Type": "application/json"
     },
       credentials: "include", 
    })
    if(response.ok){

      const data = await response.json()
      console.log(data.checkInTime);
      
      
      setCheckIn(data)
      
    }

    
  }catch(error){
 console.log(error);
 
  }
    
  }


   const handleCheckOut = async() => { 
  try{
    
    const response = await fetch('http://localhost:5000/cheakout',{
     method: 'POST',
     headers:{
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json"
     },
         
    })
    if(response.ok){

      const cheakdata = await response.json()
      console.log(cheakdata.checkOutTime);
      
      
      setCheckOut(cheakdata)
      
    }

    
  }catch(error){
 console.log(error);
 
  }
    
  }

  if (!user) {
    return (
      <div className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-lg text-gray-400">Loading user data...</p>
      </div>
    )
  }



  const toggleCheckInOut = () => {
    if (isCheckedIn) {
     handleCheckOut()
    } else {
      handleCheckIn()
    }
    setIsCheckedIn(!isCheckedIn) // Toggle state here
  }


  

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-cyan-400 rounded-full"></div>
          <h1 className="text-2xl font-semibold"></h1>
        </div>
        <div className="flex items-center gap-3">
         <Button
          onClick={toggleCheckInOut}
      className={`${
        isCheckedIn
          ? "bg-red-600 hover:bg-red-700 border-red-600"
          : "bg-green-600 hover:bg-green-700 border-green-600"
      } text-white`}
    >
      <Clock className="w-4 h-4 mr-2" />
      {isCheckedIn ? "Check Out" : "Check In"}
    </Button>

          <NavLink  to="/logout" >

          <Button variant="outline" className="bg-red-600 hover:bg-red-700 border-red-600 text-white">
            <LogOut className="w-4 h-4 mr-2" />
            Log Out
          </Button>
          </NavLink>
        </div>
      </div>

      {/* Employee Profile */}
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src={user.profileImage.url || "/placeholder.svg"}
                alt={user.profileImage.public_id}
                className="object-cover w-full h-full"
              />
            </Avatar>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 text-white">{user ? user.name : "Guest"}</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Role</p>
                  <p className="text-white font-medium">{user.role}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone Number</p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <p className="text-white font-medium">{user.phoneNumber}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-1">Email Address</p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <p className="text-white font-medium">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-700 rounded-lg">
                <LogOut className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{user.totalAttendance}</p>
                <p className="text-gray-400 text-sm">Total Attendance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-700 rounded-lg">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{checkIn.checkInTime}</p>
                <p className="text-gray-400 text-sm">Avg Check In Time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-700 rounded-lg">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">{checkOut.checkOutTime}</p>
                <p className="text-gray-400 text-sm">Avg Check Out Time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-700 rounded-lg">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold">Role Model</p>
                <p className="text-gray-400 text-sm">Employee Predicate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance History */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-cyan-400 rounded-full"></div>
            <h2 className="text-2xl font-semibold">Attendance History</h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-800 rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="p-2"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="p-2"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            <Button variant="outline" className="bg-gray-800 border-gray-700 text-white">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              Sort
            </Button>

            <Button variant="outline" className="bg-gray-800 border-gray-700 text-white">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Attendance Records */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {user.attendanceHistory.slice(0, 6).map((record, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-white font-medium">{record.date}</span>
                  <Badge
                    className={`ml-auto ${
                      record.status === "On Time"
                        ? "bg-green-500"
                        : record.status === "Late"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    } text-white`}
                  >
                    {record.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Check In Time</p>
                    <p className="text-white font-medium">{record.checkInTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Check Out Time</p>
                    <p className="text-white font-medium">{record.checkOut}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
      </div>
    </div>
  )
}
