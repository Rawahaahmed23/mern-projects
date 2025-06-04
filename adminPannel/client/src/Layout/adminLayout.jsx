import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <header>
        <div className="container flex ">
          <nav>
            <ul className="flex flex-row gap-14">
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/users"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                >
                  User Management
                </NavLink>
              </li>
              <li>Home</li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AdminLayout;
