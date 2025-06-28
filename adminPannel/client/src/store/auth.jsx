import { createContext, useContext, useEffect, useState } from "react";

export const AuhtContext = createContext();

export const Authprovide = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();



  const storedTokenINS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const AuthrizationToken = `Bearer ${token}`;
  let isLogin = !!token;

  const Logoutuser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: AuthrizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
    console.log(data);
    

        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
    
  };
  useEffect(() => {
  userAuthentication();
},[]);
  return (
    <AuhtContext.Provider
      value={{ storedTokenINS, Logoutuser, isLogin, user ,AuthrizationToken}}
    >
      {children}
    </AuhtContext.Provider>
  );
};


export const useAuth = () => {
  const authCOntextValue = useContext(AuhtContext);

  if (!authCOntextValue) {
    throw new Error("useauth out side of the provdie");
  }
  return authCOntextValue;
};
