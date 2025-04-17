import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

function Register() {
  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const {storedToken}  = useAuth()
const navigate = useNavigate()
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(e);
    
    setuser({
      ...user,
      [name]: value,
    });
  };

  const formhandle = async (e) => {
    e.preventDefault();
    try{
      const response =await fetch(`http://localhost:5000/api/router/register`,{
        method: "Post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })

  
      const res_data = await response.json()
     console.log(res_data.message);
     
      
      if(response.ok){
        
       
        localStorage.setItem("token",res_data.token)
            
        setuser ({
          username: "",
          email: "",
          phone: "",
          password: "",
        })
        navigate("/login")
        storedToken(res_data.token)
 
        
       
        
       
      }else{
        alert(res_data.extraDetails ? res_data.extraDetails :res_data.message)
      
      }

      console.log("response data : ", response);
    }catch(error){
     
   
    }
  


    }

 

  return (
    <>
      <main>
        <div className="relative w-full h-screen">
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-400 to-blue-900"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[50%] h-10/12 bg-white shadow-lg rounded-lg z-20 ">
              <div className="content flex flex-col justify-center items-center">
                <header className="header p-10 flex">
                  <h1 className="text-5xl font-bold text-[#0D1870]">Create Account</h1>
                </header>
                <div className="input p-10 flex-col flex">
                  <form onSubmit={formhandle}>
                    <input
                      type="text"
                      placeholder="Name"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      name="username"
                      onChange={handleInput}
                      className="p-5 text-lg w-2xl rounded-md border-2 border-gray-300 m-4 bg-gray-100"
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      name="email"
                      onChange={handleInput}
                      className="p-5 text-lg w-2xl rounded-md border-2 border-gray-300 m-4 bg-gray-100"
                    />
                    <input
                      type="number"
                      placeholder="phone"
                      required
                      autoComplete="off"
                      id="phone"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                      className="p-5 text-lg w-2xl rounded-md border-2 border-gray-300 m-4 bg-gray-100"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                      className="p-5 text-lg w-2xl rounded-md border-2 border-gray-300 m-4 bg-gray-100"
                    />
                    <div className="button flex justify-center items-center mt-5">
                      <button 
                        type="submit" 
                        className="bg-black mt-10 text-white font-extrabold px-6 py-4 rounded-4xl hover:cursor-pointer text-xl"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="line">
                  <p className="text-xl">
                    Already signed in? Go to{" "}
                    <NavLink to="/login" className={"text-blue-500 underline font-bold"}>
                      Login
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Register;