
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const isLogin = !!user;

const Logout = async () => {
  try {
    await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include", // cookie bhejne ke liye
    });
    setUser(null); // context se user hata do
  } catch (error) {
    console.error("Logout failed", error);
  }
};

  useEffect(() => {
    const userAuthentication = async (e) => {
      
      try {
        const response = await fetch("http://localhost:5000/user", {
          method: "GET",
          credentials: "include", // 👈 required to send cookies
        });

        if (response.ok) {
          const data = await response.json();
           setUser(data.user);
   
        } 
      } catch (error) {
        console.log("User fetch failed", error);

      }
    };

    

    userAuthentication();
  }, []);

  return (
    <UserContext.Provider value={{ user, Logout, isLogin,setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const contextvalue = useContext(UserContext);
  if (!contextvalue) {
    throw new Error("useAuth must be used inside UserProvider");
  }
  return contextvalue;
};
