import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { SiTwinmotion } from "react-icons/si";

function Portfolio() {
  const [active, setActive] = useState(null);

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
            <li
              onClick={() => setActive("website")}
              className={`relative group hover:cursor-pointer text-lg font-bold flex flex-col items-center gap-2 transition-colors duration-300
                ${active === "website" ? "text-blue-600" : "text-gray-700"}
                hover:text-blue-500
              `}
            >
              <CgWebsite className="text-3xl" />
              <span>Websites</span>
              <div
                className={`h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-300
                ${active === "website" ? "w-full" : ""}
              `}></div>
            </li>

            {/* Artificial Intelligence */}
            <li
              onClick={() => setActive("ai")}
              className={`relative group hover:cursor-pointer text-lg font-bold flex flex-col items-center gap-2 transition-colors duration-300
                ${active === "ai" ? "text-green-600" : "text-gray-700"}
                hover:text-green-500
              `}
            >
              <FaCode className="text-3xl" />
              <span>Artificial Intelligence</span>
              <div
                className={`h-1 w-0 bg-green-500 group-hover:w-full transition-all duration-300
                ${active === "ai" ? "w-full" : ""}
              `}></div>
            </li>

            {/* Animations */}
            <li
              onClick={() => setActive("animation")}
              className={`relative group hover:cursor-pointer text-lg font-bold flex flex-col items-center gap-2 transition-colors duration-300
                ${active === "animation" ? "text-pink-600" : "text-gray-700"}
                hover:text-pink-500
              `}
            >
              <SiTwinmotion className="text-3xl" />
              <span>Animations</span>
              <div
                className={`h-1 w-0 bg-pink-500 group-hover:w-full transition-all duration-300
                ${active === "animation" ? "w-full" : ""}
              `}></div>
            </li>

          </ul>
        </div>
      </main>
    </>
  );
}

export default Portfolio;
