
function Skills() {
  return (
    <>
      <div className="main min-h-[32rem] w-full py-10">
        <div>
          <header className="flex justify-center items-center flex-col mt-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 uppercase tracking-wide text-center">
              Skills
              <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
            </h1>
          </header>
     
          <div className="flex justify-center items-center flex-col mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-x-32 lg:gap-y-24 justify-center content-center mt-10 px-4 sm:px-6 lg:px-0">
                           
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/html.png" alt="HTML" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
                <p className="mt-2 text-gray-700 font-medium text-sm sm:text-base">HTML</p>
              </div>
                       
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/css.png" alt="CSS" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
                <p className="mt-2 text-gray-700 font-medium text-sm sm:text-base">CSS</p>
              </div>
                            
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/react.png" alt="React" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
                <p className="mt-2 text-gray-700 font-medium text-sm sm:text-base">React</p>
              </div>
                       
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/node1.png" alt="Node.js" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
                <p className="mt-2 text-gray-700 font-medium text-sm sm:text-base">Node.js</p>
              </div>
                       
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/express.png" alt="Express" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
                <p className="mt-2 text-gray-700 font-medium text-sm sm:text-base">Express</p>
              </div>
                                           
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/mongodb.png" alt="MongoDB" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
                <p className="mt-2 text-gray-700 font-medium text-sm sm:text-base">MongoDB</p>
              </div>
                           
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img src="/java.png" alt="JavaScript" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
                <p className="mt-2 text-gray-700 font-medium text-sm sm:text-base">JavaScript</p>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200">
                <img
                  src="/next-js.svg"
                  alt="Next.js"
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                />
                <p className="mt-2 text-gray-700 font-medium text-sm sm:text-base">Next</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;