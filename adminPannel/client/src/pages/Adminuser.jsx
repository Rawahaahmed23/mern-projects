import { useEffect } from "react"

function Adminuser() {
  const getAlluserData= async()=>{
    try{

      const response= await fetch('http://localhost:5000/api/admin/users',{
        method:'GET',
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
    const  data = await response.json()
    console.log(data);
    
    }catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getAlluserData()
  },[])
  return (
    <h1>hello</h1>
  )
}

export default Adminuser