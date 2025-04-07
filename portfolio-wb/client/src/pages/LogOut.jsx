import { useEffect } from "react"
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
function LogOut() {
    const {LogoutUser} = useAuth()
    console.log(LogoutUser);
    
 
    useEffect(() => {
        LogoutUser();
      }, [LogoutUser]);
      
    return <Navigate to={"/login"}/>

}

export default LogOut