import React from 'react'
import { CgWebsite } from "react-icons/cg";

function Services() {
  return (
    <>
    <div className="main">
   <header className='flex justify-center items-center flex-col'>
     <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
             Services
              </h1>
              <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
   </header>


<div className="container flex flex-row justify-center items-center">
  
<div className="box w-[22rem] bg-gray-200 rounded-2xl p-5 flex flex-col justify-start items-start">
  <div className="image w-[60px] flex items-center justify-center h-[60px] bg-[#2B7FFF] rounded-full p-2">
    <CgWebsite className='text-[40px] text-white' />
  </div>
  <div className="content">
    <div className="header">
      <h4>Web Development</h4>
    </div>
    <div className="paragrph">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore reiciendis sequi!</p>
    </div>
  </div>

</div>

</div>
   </div>
   </>
  )
}

export default Services