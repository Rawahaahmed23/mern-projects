import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { SiTwinmotion } from "react-icons/si";
function Services() {
  const contactOBj= [
   {
        icon: <CgWebsite className='text-[40px] text-white' />,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore reiciendis sequi!",
        bgColor: "bg-blue-500"
      },
      {
        icon: <SiTwinmotion className=' text-[40px] text-white' />,
        title: "Animation",
        description: "We build modern mobile apps with smooth UI and great performance.",
        bgColor: "bg-yellow-500 "
      },
      {
        icon: <FaCode className='text-[40px] text-white' />,
        title: "Mern Stack Development",
        description: "Creating visually appealing and user-friendly interfaces for websites and apps.",
        bgColor: "bg-pink-500"
      }
    ];
    
  
  return (
    <>  
    <div className="main max-w-screen-2xl mx-auto">
   <header className='flex justify-center items-center flex-col mt-10 '>
     <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
             Services
              </h1>
              <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
   </header>

<div className="container flex flex-row justify-center items-center gap-20 p-5 m-5  ">
  {contactOBj.map((service,index)=>(

<div  key={index} className="box  w-[22rem] bg-gray-200 rounded-2xl p-5 flex flex-col justify-start items-start">
  <div className={`image w-[60px] flex items-center justify-center h-[60px] ${service.bgColor} rounded-full p-2 m-3`}>
    {service.icon}
  </div>
  <div className="content">
    <div className="header m-2">
      <h4 className='text-xl font-bold'>{service.title}</h4>
    </div>
    <div className="paragrph m-2">
      <p className='text-md font-medium font-sans leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore reiciendis sequi!</p>
    </div>
  </div>

</div>
    ))}

</div>
   </div>
   </>
  )
}

export default Services