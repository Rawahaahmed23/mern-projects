import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

function Adminuser() {
  const [userStats, setUserStats] = useState(null);
  const { AuthrizationToken } = useAuth();

  const getAlluserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: AuthrizationToken,
        },
      });

      const data = await response.json();
      console.log("Data from API:", data);
      setUserStats(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getAlluserData();
  }, []);

  if (!userStats) {
    return <div>Loading...</div>;
  }


  const deleteUser =async(id)=>{
  const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AuthrizationToken
        },
      }); 
      
      const data =await response.json()
      console.log(`user after ${data}`);
      
  }
  return (
    <>
      <section className="p-6 bg-gray-50 min-h-screen">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Admin User Data</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">Register At</th>
                <th className="py-3 px-6 text-left">Online</th>
                <th className="py-3 px-6 text-left">Update</th>
                <th className="py-3 px-6 text-left">Delete</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {userStats.recentLogins.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">{user.username}</td>
                  <td className="py-3 px-6 text-left">{user.email}</td>
                  <td className="py-3 px-6 text-left">{user.phone}</td>
                  <td className="py-3 px-6 text-left">{user.registeredAt}</td>
                  <td className="py-3 px-6 text-left">
                    <span
                      className={`${
                        user.isOnline ? "text-green-600" : "text-red-600"
                      } font-semibold`}
                    >
                      {user.isOnline ? "Online" : "Offline"}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left cursor-pointer text-blue-600 hover:underline">
                      <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
                  </td>
                  <td className="py-3 px-6 text-left cursor-pointer text-red-600 hover:underline">
                     <button onClick={()=>deleteUser(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Adminuser;
