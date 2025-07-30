"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useAuth } from "@/store/useAuth"
import {
  User,
  Mail,
  Phone,
  Lock,
  Briefcase,
  Clock,
  Upload,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Circle,
} from "lucide-react"

function Register() {
  const [currentStep, setCurrentStep] = useState(1)
  const [image, setImage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    profileImage: null,
    checkInLimit: "",
    role: "",
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const { saveToken } = useAuth()
  const navigate = useNavigate()

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInput = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Step 1: Upload image to Cloudinary
      const formData = new FormData()
      formData.append("file", image)
      formData.append("upload_preset", "rawaha")
      formData.append("cloud_name", "dtx7n84vi")

      const res = await fetch("https://api.cloudinary.com/v1_1/dtx7n84vi/image/upload", {
        method: "POST",
        body: formData,
      })

      const cloudData = await res.json()
       console.log(cloudData);
       
      // Step 2: Send form to backend
      const finalData = {
        ...data,
        profileImage: cloudData.secure_url,
      }

      const response = await fetch("http://mern-projects-production.up.railway.app/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success("Registration successful")
        navigate("/login")
        saveToken(result.token)
      } else {
        toast.error(result.extraDetails?.message || result.message || "Registration failed")
      }
    } catch (error) {
      console.log(error)
      toast.error("An error occurred during registration")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStep1Valid = data.name && data.email && data.password && data.phoneNumber
  const isStep2Valid = data.role && data.checkInLimit && image

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-[#1a1a1a] rounded-3xl shadow-[0_0_60px_rgba(0,212,170,0.1)] border border-[#2a2a2a] overflow-hidden">
        {/* Header with Steps */}
        <div className="bg-gradient-to-r from-[#1e1e1e] to-[#252525] p-8 border-b border-[#2a2a2a]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-2 h-16 bg-gradient-to-b from-[#00d4aa] to-[#00a884] rounded-full mr-6"></div>
              <div>
                <h1 className="text-3xl font-bold text-white">Employee Registration</h1>
                <p className="text-gray-400 text-lg mt-2">Create a new employee account</p>
              </div>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {currentStep >= 1 ? (
                  <CheckCircle className="w-8 h-8 text-[#00d4aa]" />
                ) : (
                  <Circle className="w-8 h-8 text-gray-500" />
                )}
                <span className={`ml-2 text-sm font-medium ${currentStep >= 1 ? "text-[#00d4aa]" : "text-gray-500"}`}>
                  Personal Info
                </span>
              </div>

              <div className="w-12 h-0.5 bg-gray-600"></div>

              <div className="flex items-center">
                {currentStep >= 2 ? (
                  <CheckCircle className="w-8 h-8 text-[#00d4aa]" />
                ) : (
                  <Circle className="w-8 h-8 text-gray-500" />
                )}
                <span className={`ml-2 text-sm font-medium ${currentStep >= 2 ? "text-[#00d4aa]" : "text-gray-500"}`}>
                  Work Details
                </span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleInput}>
          <div className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-2">Personal Information</h2>
                    <p className="text-gray-400">Please provide your basic details</p>
                  </div>

                  {/* Name */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                        <User size={20} />
                      </div>
                      <input
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full pl-12 pr-4 py-4 bg-[#252525] border border-[#3a3a3a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:border-transparent transition-all duration-200 text-lg"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                        <Mail size={20} />
                      </div>
                      <input
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-4 bg-[#252525] border border-[#3a3a3a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:border-transparent transition-all duration-200 text-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-2">Security & Contact</h2>
                    <p className="text-gray-400">Set up your login credentials</p>
                  </div>

                  {/* Phone Number */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                        <Phone size={20} />
                      </div>
                      <input
                        name="phoneNumber"
                        type="tel"
                        placeholder="03XX-XXXXXXX"
                        value={data.phoneNumber}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-[#252525] border border-[#3a3a3a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:border-transparent transition-all duration-200 text-lg"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Password *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                        <Lock size={20} />
                      </div>
                      <input
                        name="password"
                        type="password"
                        placeholder="Create a secure password"
                        value={data.password}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-[#252525] border border-[#3a3a3a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:border-transparent transition-all duration-200 text-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Work Details */}
            {currentStep === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-2">Work Information</h2>
                    <p className="text-gray-400">Configure your work profile</p>
                  </div>

                  {/* Role */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Job Role *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                        <Briefcase size={20} />
                      </div>
                      <input
                        name="role"
                        type="text"
                        placeholder="e.g., Manager, Developer, Designer"
                        value={data.role}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-[#252525] border border-[#3a3a3a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:border-transparent transition-all duration-200 text-lg"
                      />
                    </div>
                  </div>

                  {/* Check-In Time */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Check-In Time *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                        <Clock size={20} />
                      </div>
                      <input
                        name="checkInLimit"
                        type="text"
                        value={data.checkInLimit}
                        onChange={handleChange}
                        placeholder="e.g., 09:00 AM"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-[#252525] border border-[#3a3a3a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:border-transparent transition-all duration-200 text-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-2">Profile Setup</h2>
                    <p className="text-gray-400">Upload your profile picture</p>
                  </div>

                  {/* Profile Image */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Profile Picture *</label>
                    <div className="relative">
                      <label className="flex flex-col items-center justify-center w-full h-48 bg-[#252525] border-2 border-dashed border-[#3a3a3a] rounded-xl cursor-pointer hover:bg-[#2a2a2a] hover:border-[#00d4aa] transition-all duration-200">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload size={32} className="mb-4 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                          {image && (
                            <p className="mt-2 text-sm text-[#00d4aa] font-medium">✓ {image.name || "File selected"}</p>
                          )}
                        </div>
                        <input
                          name="profileImage"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            setImage(e.target.files[0])
                          }}
                          required
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#2a2a2a]">
              <div>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center px-6 py-3 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowLeft size={20} className="mr-2" />
                    Previous
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-4">
                {currentStep < 2 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStep1Valid}
                    className="flex items-center px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-[#00d4aa] to-[#00b392] hover:from-[#00c7a0] hover:to-[#00a889] focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:ring-offset-2 focus:ring-offset-[#1a1a1a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    Next Step
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !isStep2Valid}
                    className="flex items-center px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-[#00d4aa] to-[#00b392] hover:from-[#00c7a0] hover:to-[#00a889] focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:ring-offset-2 focus:ring-offset-[#1a1a1a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Registering...
                      </>
                    ) : (
                      <>
                        Complete Registration
                        <CheckCircle size={20} className="ml-2" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="bg-[#1e1e1e] p-6 border-t border-[#2a2a2a] text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-[#00d4aa] hover:underline transition-all font-medium">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
