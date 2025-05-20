import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Home() {
  return (
    <>
    <main>

      <div className='w-full h-[43rem] flex flex-row justify-around items-center bg-lime-100 '>
        <div className="image w-[43rem] ">
          <img src="/herbal.png" alt=""  className=''/>
        </div>
        <div className="content flex  justify-between items-center">
          <header>
            <div className="tag text-green-700 font-md h-0 ">welcome to herbal</div>
             <h1 className='font-bold text-5xl w-xl leading-28 xl:text-7xl'>Pure & Organic</h1>
             <h1 className='font-bold text-5xl w-xl  xl:text-7xl '>Pure Life</h1>
             <div className="sales">
              <h3 className='text-4xl font-bold'>Sales upto <span className='text-[#ff8a00]'>30% OFF</span></h3>
              <p className='text-gray-500 mt-5'>Free shipping on all your order. we deliver, you enjoy</p>
             </div>
           <div className="button">
  <button className="flex items-center gap-2 mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-full transition duration-300">
    Shop Now 
    <span>
      <FaArrowRightLong />
    </span>
  </button>
</div>
          </header>
        </div>
      </div>
    </main>
    
    </>
  )
}

export default Home