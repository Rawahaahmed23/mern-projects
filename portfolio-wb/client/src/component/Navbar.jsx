import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';

function Navbar() {
  const { isLoggedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  console.log("login or not ", isLoggedIn);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) => 
    isActive ? "text-blue-500" : "hover:text-blue-500";

  return (
    <div>
      <nav className='flex w-full justify-between items-center border-b border-gray-400 px-4 lg:px-0'>
   
        <div className='p-4 lg:p-7'>
   
        </div>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex w-[80%] flex-row justify-end items-center p-7 gap-14 text-lg font-bold cursor-pointer'>
          <li className="relative group">
            <NavLink
              to="/"
              className={navLinkClass}
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          
          <li className="relative group">
            <NavLink
              to="/about"
              className={navLinkClass}
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          
          <li className="relative group">
            <NavLink
              to="/service"
              className={navLinkClass}
            >
              <span>Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          
       
          
          {isLoggedIn ? (
            <li className="relative group">
              <NavLink
                to="/logout"
                className={navLinkClass}
              >
                <span>Logout</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ) : (
            <>
              <li className="relative group">
                <NavLink
                  to="/register"
                  className={navLinkClass}
                >
                  <span>Register</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
              
              <li className="relative group">
                <NavLink
                  to="/login"
                  className={navLinkClass}
                >
                  <span>Login</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden p-4 text-2xl focus:outline-none'
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <ul className='flex flex-col bg-white border-b border-gray-400 shadow-lg'>
          <li className="border-b border-gray-200 last:border-b-0">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `block px-6 py-4 text-lg font-bold transition-colors duration-200 ${
                  isActive ? 'text-blue-500 bg-blue-50' : 'hover:text-blue-500 hover:bg-gray-50'
                }`
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          
          <li className="border-b border-gray-200 last:border-b-0">
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `block px-6 py-4 text-lg font-bold transition-colors duration-200 ${
                  isActive ? 'text-blue-500 bg-blue-50' : 'hover:text-blue-500 hover:bg-gray-50'
                }`
              }
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          
          <li className="border-b border-gray-200 last:border-b-0">
            <NavLink
              to="/service"
              className={({ isActive }) => 
                `block px-6 py-4 text-lg font-bold transition-colors duration-200 ${
                  isActive ? 'text-blue-500 bg-blue-50' : 'hover:text-blue-500 hover:bg-gray-50'
                }`
              }
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
          </li>
          
          <li className="border-b border-gray-200 last:border-b-0">
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `block px-6 py-4 text-lg font-bold transition-colors duration-200 ${
                  isActive ? 'text-blue-500 bg-blue-50' : 'hover:text-blue-500 hover:bg-gray-50'
                }`
              }
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
          
          {isLoggedIn ? (
            <li className="border-b border-gray-200 last:border-b-0">
              <NavLink
                to="/logout"
                className={({ isActive }) => 
                  `block px-6 py-4 text-lg font-bold transition-colors duration-200 ${
                    isActive ? 'text-blue-500 bg-blue-50' : 'hover:text-blue-500 hover:bg-gray-50'
                  }`
                }
                onClick={closeMobileMenu}
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li className="border-b border-gray-200 last:border-b-0">
                <NavLink
                  to="/register"
                  className={({ isActive }) => 
                    `block px-6 py-4 text-lg font-bold transition-colors duration-200 ${
                      isActive ? 'text-blue-500 bg-blue-50' : 'hover:text-blue-500 hover:bg-gray-50'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  Register
                </NavLink>
              </li>
              
              <li className="border-b border-gray-200 last:border-b-0">
                <NavLink
                  to="/login"
                  className={({ isActive }) => 
                    `block px-6 py-4 text-lg font-bold transition-colors duration-200 ${
                      isActive ? 'text-blue-500 bg-blue-50' : 'hover:text-blue-500 hover:bg-gray-50'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;