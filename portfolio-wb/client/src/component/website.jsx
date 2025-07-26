import { CiShare1 } from "react-icons/ci";

function Website() {
  let tittle = '';
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
    },
    {
      tittle: 'Ecomerce Website using react js',
      image: 'grid.jpg',
      link: "https://www.instagram.com/direct/t/17846899605388743/"
    },
    {
      tittle: 'Ecomerce Website using react js',
      image: 'grid.jpg',
      link: "https://www.instagram.com/direct/t/17846899605388743/"
    },
    {
      tittle: 'Ecomerce Website using react js',
      image: 'grid.jpg',
      link: "https://www.instagram.com/direct/t/17846899605388743/"
    },
    {
      tittle: 'Ecomerce Website using react js',
      image: 'grid.jpg',
      link: "https://www.instagram.com/direct/t/17846899605388743/"
    }
  ];

  return (
    <div className="main px-4 sm:px-6 lg:px-8">
      <div className="container flex flex-row justify-center items-center h-full w-full mt-8 sm:mt-10 lg:mt-13">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-15 max-w-7xl'>
          {data.map((item, index) => (
            <div key={index} className='w-full bg-[#101722] rounded-xl flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className="image w-full max-w-[25rem]">
                <img 
                  className='rounded-t-2xl w-full h-48 sm:h-56 lg:h-64 object-cover' 
                  src={item.image} 
                  alt={item.tittle} 
                />
              </div>
              <div className="header mt-5 flex flex-col justify-center items-center p-4 sm:p-5">
                <div className="line bg-white h-[3px] w-[42px] rounded-lg"></div>
                <h1 className='text-lg sm:text-xl lg:text-2xl px-3 sm:px-5 font-bold text-center max-w-[300px] text-white mt-3'>
                  {item.tittle}
                </h1>
                <div className="flex space-x-3 mt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 sm:px-4 rounded-lg transition-colors flex items-center gap-2 text-sm sm:text-base">
                    <CiShare1 className="text-base sm:text-lg" />
                    <span>View Live</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Website;