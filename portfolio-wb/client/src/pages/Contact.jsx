import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth"

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
  });
const [userData,setuserdata]= useState(true)
  const {user}=  useAuth()
  if (userData && user){
  setContact({
    username: user.username ,
    email: user.email,
    message: ""  // ✅ Corrected here
  })


  setuserdata(false)
  }

 
  const handle = (e)=>{
 
    const name = e.target.name; // ✅ input ke name attribute se value lo
  const value = e.target.value

setContact({
  ...contact,
  [name]:value
})

  }

  const handelSubmit =async (e)=>{
    e.preventDefault()
    

    try{
      const response = await fetch("http://localhost:5000/api/form/contact",{
        method: 'Post',
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(contact)
        
        
   
      }
    )
    console.log(response.message);
      if(response.ok){
        setContact({
          username: "",
          email: "",
          message: ""
        })
      }
    }catch(error){
     console.log(error);
     
    }
  
    
  }
  return (
    <>
      <main className="py-12 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
                Contact Us
              </h1>
              <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
            </header>
                     
            {/* Fixed the flex layout and width */}
            <div className="flex flex-row w-[80%] h-[43rem] bg-white rounded-lg">
              {/* Image container */}
              <div className="w-full md:w-1/2 pr-0 md:pr-6 mb-6 md:mb-0">
                <img
                  src="/contact2.jpg"
                  alt="Contact"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
                         
              {/* Form container */}
              <div className="w-full md:w-1/2 p-10 mt-10">
                <form className="space-y-6" onSubmit={handelSubmit}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="username"
                       value={contact.username}
                       onChange={handle}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition mt-5"
                    />
                  </div>
                                 
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                  value={contact.email}
                  onChange={handle}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition mt-5"
                    />
                  </div>
                                 
                  <div className="relative">
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      name="message"
                      value={contact.message}
                      onChange={handle}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition mt-5"
                    ></textarea>
                  </div>
                  
                  {/* Social media buttons */}
                  <div className="flex space-x-4 mt-5">
                    {/* GitHub button */}
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out w-1/2"
                    >
                    <FaGithub  className="mx-2 text-2xl"/>
                      GitHub
                    </a>
                    
                    {/* LinkedIn button */}
                    <a 
                      href="https://www.linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out w-1/2"
                    >
                      <FaLinkedin className="mx-2 text-2xl" />
                      LinkedIn
                    </a>
                  </div>
                                 
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium py-3 px-4 rounded-md transition duration-300 ease-in-out mt-5 "
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;