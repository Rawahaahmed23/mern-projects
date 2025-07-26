import Services from "../component/Services"
import Service from "./Service"
import Skills from "../component/skills"
import Portfolio from "../component/portfolio"
import Website from "../component/website"
import { useAuth } from "../store/auth"
import Contact from "../component/Contact"


function Home() {
    const {user} = useAuth()
    
    return (
        <>
            <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="container flex w-full items-center mt-8 sm:mt-12 md:mt-16 lg:mt-23">
                    <div className="box flex flex-col justify-between gap-8 w-full md:flex-row md:items-center md:gap-12 lg:gap-16">
                        
                        {/* Image Section */}
                        <div className="image flex justify-center md:justify-start md:flex-1">
                            <img 
                                src="/DEKU.jpg" 
                                alt="Rawaha Ahmed" 
                                className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] object-cover rounded-lg"
                            />
                        </div>
                        
                        {/* Content Section */}
                        <div className="content flex flex-col justify-center items-center md:items-start md:flex-1 gap-4 md:gap-6 lg:gap-8 py-8 md:py-12">
                            
                            {/* Header */}
                            <div className="header text-center md:text-left leading-normal">
                                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-normal">Hi,</h1>
                                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-normal">
                                    I am <span className="text-blue-500">Rawaha Ahmed</span>
                                </h1>
                                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[43px] mt-2 leading-normal">
                                    Full stack developer
                                </h1>
                            </div>
                            
                            {/* Welcome Message */}
                            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-[26px] text-center md:text-left text-gray-700">
                                {user ? `Welcome ${user.username} to our website` : 'Welcome to our website'}
                            </h2>
                            
                            {/* Button */}
                            <div className="button mt-4 md:mt-6 lg:mt-7">
                                <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 px-6 py-3 sm:px-8 sm:py-4 lg:p-5 text-white font-bold text-lg sm:text-xl lg:text-2xl rounded-xl hover:scale-105 transition-all duration-300">
                                    Download CV
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </main>
            
            <Skills />
            <Services />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Home