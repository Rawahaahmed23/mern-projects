import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function Login() {
  const [user, setuser] = useState({
    
    email: "",      
    
    password: "",
  });
  const navigate = useNavigate()
  const {storedToken}  = useAuth()
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
      const login = await fetch("http://localhost:5000/api/router/login",{
        method:'Post',
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
      })
      const res_data = await login.json()
    
  

      if(login.ok){

        toast.success('loin sucessful')
        localStorage.setItem("token",res_data.token)
        setuser ({
        
          email: "",
        
          password: "",
        })
        navigate("/")
        storedToken(res_data.token)
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    }catch(error){

    }
  };

  return (
    <>
      <main>
        <div className="relative w-full h-screen">
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-400 to-blue-900"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[50%] h-10/12 bg-white shadow-lg rounded-lg z-20 ">
              <div className="content flex flex-col justify-center items-center">
                <header className="header p-10 flex">
                  <h1 className="text-5xl font-bold text-[#0D1870]">Login</h1>
                </header>
                <div className="input p-10 flex-col flex">
                  <form onSubmit={formhandle}>
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
               
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;