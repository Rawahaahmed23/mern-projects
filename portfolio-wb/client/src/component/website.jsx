import React from 'react';
import { CiShare1 } from "react-icons/ci";

function Website() {
    let tittle = ''
    let data = [
      
      {
            tittle: 'Ecomerce e using next js',
             image: 'contact.jpg',
             link: "https://www.instagram.com/direct/t/17846899605388743/"
        }, 
        {
            tittle: 'Ecomerce Website using react js',
             image: 'grid.jpg',
             link: "https://www.instagram.com/direct/t/17846899605388743/"
        } ,  {
            tittle: 'Ecomerce Website using react js',
             image: 'grid.jpg',
             link: "https://www.instagram.com/direct/t/17846899605388743/"
        },  {
            tittle: 'Ecomerce Website using react js',
             image: 'grid.jpg',
             link: "https://www.instagram.com/direct/t/17846899605388743/"
        },  {
            tittle: 'Ecomerce Website using react js',
             image: 'grid.jpg',
             link: "https://www.instagram.com/direct/t/17846899605388743/"
        },  {
            tittle: 'Ecomerce Website using react js',
             image: 'grid.jpg',
             link: "https://www.instagram.com/direct/t/17846899605388743/"
        }
    ]
    
  return (
    <div className="main">
      <div className="container flex flex-row justify-center items-center h-full w-full mt-13">
  

      
       <div className='grid grid-cols-3 grid-rows-2 gap-15'>
      {
           data.map((item)=>(

          <div className='w-full h-full bg-[#101722] rounded-xl flex flex-col justify-center items-center ' >
            <div className="image w-[25rem]">
              <img className='rounded-t-2xl' src={item.image} alt="" />
            </div>
            <div className="header mt-5 flex flex-col justify-center items-center p-5">
              <div className="line bg-white h-[3px] w-[42px] rounded-lg"></div>
              <h1 className='text-2xl px-5 font-bold text-center w-[300px] text-white'>{item.tittle}</h1>
              <div className="flex space-x-3 mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
                  <CiShare1 className="text-lg" />
                  <span>View Live</span>
                </button>
              </div>
            </div>
          </div>
        ))
      }
      
       
        </div>
      </div>
    </div>
  );
}

export default Website;