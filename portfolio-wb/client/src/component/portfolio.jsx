import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { SiTwinmotion } from "react-icons/si";
import Website from "./website";
import AI from "./ai";
import Animation from "./animation";

function Portfolio() {
     
  
 const [select , selectTab]= useState('website')

  return (
    <>
      <main className="max-w-screen-2xl mx-auto">
        <header className="flex justify-center items-center flex-col mt-10">
          <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
            Portfolio
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
          </h1>
        </header>

        <div className="main flex items-center justify-center h-full mt-10 mx-auto">
          <ul className="flex flex-row justify-center items-center text-xl gap-50 list-none">

            {/* Websites */}
            <li className={`relative group text-lg font-bold flex flex-col items-center gap-2 transition-colors duration-300 hover:text-blue-500 ${
              selectTab === 'website'?'text-blue-500':'text-gray-800 hover:text-blue-500'
            }`}   onClick={()=>selectTab("website")}>
              <CgWebsite className="text-3xl"  />
              <span>Websites</span>
            </li>

            {/* Artificial Intelligence */}
            <li className={`relative group text-lg font-bold flex flex-col items-center gap-2 transition-colors duration-300 hover:text-blue-500 ${
              selectTab === 'AI'?'text-blue-500':'text-gray-800 hover:text-blue-500'
            }`}
            onClick={()=>selectTab("AI")}>
              <FaCode className="text-3xl" />
              <span>Artificial Intelligence</span>
            </li>

            {/* Animations */}
            <li className={`relative group text-lg font-bold flex flex-col items-center gap-2 transition-colors duration-300 hover:text-blue-500 ${
              selectTab === 'Animation'?'text-blue-500':'text-gray-800 hover:text-blue-500'
            }`}
            onClick={()=> selectTab("Animation")}>
              <SiTwinmotion className="text-3xl" />
              <span>Animations</span>
            </li>
          
          </ul> 
        </div>

        <div className="">
          {select === 'website'&& <Website />}
          {select === 'AI'&& <AI />}
          {select === 'Animation'&& <Animation />}
        </div>
        
      </main>
    </>
  );
}

export default Portfolio;
