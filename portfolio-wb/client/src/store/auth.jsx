import { createContext, useContext, useEffect, useState } from "react";

export const context = createContext()

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Authprovider = ({children})=>{
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user,setUser] = useState("")

const storedToken = (serverToken)=>{
  setToken(serverToken);
  return localStorage.setItem("token", serverToken);
   
}

const isLoggedIn = !!token;

const LogoutUser = ()=>{
  setToken("");
  return localStorage.removeItem("token");
  
  
}
// contact form function login useer data get 
useEffect(() => {
  const useAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/router/user", {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        console.log('user data', data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useAuthentication(); // ✅ function ko yahin call karo
}, []);


return <context.Provider value ={{ isLoggedIn, storedToken, LogoutUser, user}}>
    {children}
</context.Provider>
}




export const useAuth = () => {
    const authContextValue = useContext(context);
    if (!authContextValue) {
      throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
  };