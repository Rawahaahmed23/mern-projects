import React, { useState } from 'react';
import { IoCartOutline, IoSearchOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegHeart, FaPhoneAlt, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full">
      {/* Top Bar */}
  

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <span className="text-2xl font-bold text-green-600">Ecobazar</span>
          </div>

          {/* Search */}
          <div className="flex items-center w-1/2">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full px-4 py-2 border border-gray-200 rounded-l-md focus:outline-none"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600">
              Search
            </button>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500">Customer Services</span>
            <span className="font-semibold">(219) 555-0114</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="bg-gray-800 py-3">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center">
              {/* <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md mr-6">
                <FaBars className="mr-2" />
                <span>All Categories</span>
                <FaAngleDown className="ml-2" />
              </button> */}
              <div className="flex space-x-12 text-white">
                <a href="#" className="flex items-center">Home </a>
                <a href="#" className="flex items-center">Shop </a>
                <a href="#" className="flex items-center">Pages </a>
                <a href="#" className="flex items-center">Blog </a>
                <a href="#" className="flex items-center">About Us</a>
                <a href="#" className="flex items-center">Contact Us</a>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <button><FaRegHeart className="text-xl" /></button>
              <button className="relative">
                <IoCartOutline className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-white text-green-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </button>
              <button><BiUser className="text-xl" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Top Bar */}
        <div className="flex justify-between items-center p-4">
          <span className="text-xl font-bold text-green-600">Ecobazar</span>
          <div className="flex items-center space-x-3">
            <button><FaRegHeart /></button>
            <button className="relative">
              <IoCartOutline className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </button>
            <button><BiUser /></button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-500">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-4 mb-4">
          <div className="flex">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full px-4 py-2 border border-gray-200 rounded-l-md focus:outline-none"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-md">
              <IoSearchOutline />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-white shadow-lg">
            <div className="flex flex-col p-4">
              <div className="py-2 border-b border-gray-100">
                <span className="text-xs text-gray-500">Customer Services</span>
                <p className="font-semibold">(219) 555-0114</p>
              </div>
              <a href="#" className="py-3 border-b border-gray-100">Home</a>
              <a href="#" className="py-3 border-b border-gray-100">Shop</a>
              <a href="#" className="py-3 border-b border-gray-100">Pages</a>
              <a href="#" className="py-3 border-b border-gray-100">Blog</a>
              <a href="#" className="py-3 border-b border-gray-100">About Us</a>
              <a href="#" className="py-3 border-b border-gray-100">Contact Us</a>
              <div className="py-3 border-b border-gray-100">
                <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md w-full justify-center">
                  <span>All Categories</span>
                  <FaAngleDown className="ml-2" />
                </button>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center">
                  <span>Eng</span>
                  <FaAngleDown className="ml-1 text-xs" />
                </div>
                <div className="flex items-center">
                  <span>USD</span>
                  <FaAngleDown className="ml-1 text-xs" />
                </div>
                <div className="flex items-center text-gray-500">
                  <IoLocationOutline className="mr-1" />
                  <span className="text-sm">Store Location</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;