import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
              <nav>
                <ul className="flex items-center space-x-8">
                  <li>
                    <NavLink
                      to="/admin/ubd"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-blue-500 text-white shadow-md"
                            : "text-gray-600 hover:text-blue-500 hover:bg-blue-50"
                        }`
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/users"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-blue-500 text-white shadow-md"
                            : "text-gray-600 hover:text-blue-500 hover:bg-blue-50"
                        }`
                      }
                    >
                      User Management
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-all duration-200"
                    >
                      Home
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* Optional: Add user profile or logout button */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <div className="container mx-auto px-6 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;