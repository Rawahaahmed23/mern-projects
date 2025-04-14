import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='flex w-full justify-evenly border-b'>
        <div className='p-7'>
          logo
        </div>
        <ul className='w-[70%] flex flex-row justify-end items-center p-7 gap-14 text-lg font-extrabold cursor-pointer h-15rem'>
          <li className="relative group">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink 
              to="/skills" 
              className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
            >
              <span>Skills</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink 
              to="/works" 
              className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
            >
              <span>Works</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;