import Services from "../component/Services"
import Service from "./Service"
import Skills from "../component/skills"
import { useAuth } from "../store/auth"

function Home() {
   
  const {user} = useAuth()

  return (
    < >
   
    <main className="max-w-screen-2xl mx-auto">
      <div className="container flex w-full items-center mt-23">
        <div className="box flex flex-row justify-between gap-[2rem]">
        <div className="image">
             <img src="/DEKU.jpg" alt=""  className="w-3xl"/>
        </div>
           <div className="h-[40rem] flex flex-col justify-center">
            <div className="header leading-24 ">
            <h1 className="font-bold text-[54px] ">Hi,</h1>
            <h1 className=" font-bold text-[54px] ">I am <span className="text-blue-500">Rawaha Ahmed </span></h1>
            <h1 className=" font-bold text-[43px]">Full stack developer</h1>
            </div>
            <h1 className="font-semibold text-[26px]">
            {user ? `Welcome ${user.username} to our website` : 'Welcome to our website'}
          </h1>
            <div className="button mt-7">
              <button className=" bg-blue-500 p-5 text-white font-bold text-2xl rounded-xl ">Download Cv</button>
            </div>
           </div>
        </div>
      </div>
    </main>
      <Skills />
      <Services />
    
    </>
  )
}

export default Home