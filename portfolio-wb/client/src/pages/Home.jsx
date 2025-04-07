import Services from "../component/Services"
import Service from "./Service"

function Home() {
  return (
    < >
   
    <main className="max-w-screen-2xl mx-auto">
      <div className="container flex w-full items-center mt-23">
        <div className="box flex flex-row justify-between gap-[2rem]">
        <div className="image">
             <img src="/DEKU.jpg" alt=""  className="w-3xl"/>
        </div>
           <div className="h-[40rem] flex flex-col justify-center">
            <div className="header leading-26 text-[55px]">
            <h1 className="font-bold  ">Hi,</h1>
            <h1 className=" font-bold  ">I am <span className="text-blue-500">Rawaha Ahmed </span></h1>
            <h1 className=" font-bold  ">Mern stack developer</h1>
            </div>
            <div className="button mt-12">
              <button className=" bg-blue-500 p-5 text-white font-bold text-2xl rounded-xl ">Download Cv</button>
            </div>
           </div>
        </div>
      </div>
      <Services />
    </main>
    
    </>
  )
}

export default Home