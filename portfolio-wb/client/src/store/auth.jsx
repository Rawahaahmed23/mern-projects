import { createContext, useContext, useState } from "react";

export const context = createContext()


export const Authprovider = ({children})=>{
  const [token, setToken] = useState(localStorage.getItem("token") || "");

const storedToken = (serverToken)=>{
  setToken(serverToken);
  return localStorage.setItem("token", serverToken);
   
}

const isLoggedIn = !!token;

const LogoutUser = ()=>{
  setToken("");
  return localStorage.removeItem("token");
  
  
}

return <context.Provider value ={{ isLoggedIn, storedToken, LogoutUser}}>
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