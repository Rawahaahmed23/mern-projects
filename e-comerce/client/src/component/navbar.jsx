import React, { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img 
              src="/api/placeholder/150/50" 
              alt="Ecobazar Logo" 
              className="h-10"
            />
          </div>

          {/* Search */}
          <div className="flex items-center w-1/2">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-r-md">
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="flex space-x-4">
            <button><FaRegHeart className='text-2xl'/></button>
            <button><IoCartOutline className='text-3xl'/></button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="bg-gray-900 py-3">
          <div className="max-w-7xl mx-auto px-4 flex justify-between ">
            <div className="flex justify-around gap-10 text-lg font-medium hover:cursor-pointer ">
              <a href="#" className="text-white hover:text-gray-400 ">Home</a>
              <a href="#" className="text-white   hover:text-gray-400 ">Shop</a>
              <a href="#" className="text-white  hover:text-gray-400 ">Pages</a>
              <a href="#" className="text-white  hover:text-gray-400 ">Blog</a>
              <a href="#" className="text-white  hover:text-gray-400 ">About Us</a>
              <a href="#" className="text-white  hover:text-gray-400 ">Contact Us</a>
            </div>
     <div className="flex items-center space-x-2 text-white">
      <FaPhoneAlt className="text-2xl" />
      <span>(92) 317-2800184</span>
    </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Top Bar */}
        <div className="flex justify-between items-center p-4">
          <img 
            src="/api/placeholder/100/40" 
            alt="Ecobazar Logo" 
            className="h-8"
          />
          <div className="flex space-x-4">
            <button>❤️</button>
            <button>🛒</button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✖️' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-4 mb-4">
          <div className="flex">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-r-md">
              Search
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-gray-900">
            <div className="flex flex-col space-y-2 p-4">
              <a href="#" className="text-white hover:bg-gray-400 ">Home</a>
              <a href="#" className="text-white">Shop</a>
              <a href="#" className="text-white">Pages</a>
              <a href="#" className="text-white">Blog</a>
              <a href="#" className="text-white">About Us</a>
              <a href="#" className="text-white">Contact Us</a>
              <div className="pt-4 border-t border-white text-white">📞 (92) 317-2800184</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;