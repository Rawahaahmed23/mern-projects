import React from "react";

function Skills() {
  return (
    <>
      <div className="main h-[32rem] w-full">
        <div>
          <header className="flex justify-center items-center flex-col mt-10">
            <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
              Skills
              <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
            </h1>
    </header>

    <div className="flex justify-center items-center flex-col mt-10">
            <div className="grid grid-cols-5 grid-rows-4 gap-y-24 gap-x-32 justify-center content-center mt-10">
              {/* Skill 1 */}
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/html.png" alt="HTML" className="w-16 h-16" />
                <p className="mt-2 text-gray-700 font-medium">HTML</p>
              </div>
              {/* Skill 2 */}
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/css.png" alt="CSS" className="w-16 h-16" />
                <p className="mt-2 text-gray-700 font-medium">CSS</p>
              </div>
              {/* Skill 3 */}
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/react.png" alt="React" className="w-16 h-16" />
                <p className="mt-2 text-gray-700 font-medium">React</p>
              </div>
              {/* Skill 4 */}
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/node1.png" alt="Node.js" className="w-16 h-16" />
                <p className="mt-2 text-gray-700 font-medium">Node.js</p>
              </div>
              {/* Skill 5 */}
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/express.png" alt="Express" className="w-16 h-16" />
                <p className="mt-2 text-gray-700 font-medium">Express</p>
              </div>
              {/* Skill 6 */}
              {/* Skill 6 */}
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/mongodb.png" alt="MongoDB" className="w-16 h-16" />
                <p className="mt-2 text-gray-700 font-medium">MongoDB</p>
              </div>

              {/* Skill 7 */}
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/java.png" alt="JavaScript" className="w-16 h-16" />
                <p className="mt-2 text-gray-700 font-medium">JavaScript</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img
                  src="/next-js.svg"
                  alt="JavaScript"
                  className="w-16 h-16"
                />
                <p className="mt-2 text-gray-700 font-medium">Next</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
