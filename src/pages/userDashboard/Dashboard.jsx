import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="bg-[url('/src/assets/login.jpg')] bg-cover bg-center min-h-screen">
    <div className="bg-gradient-to-r from-black/70 to-transparent min-h-screen">
      <div className="px-4 md:px-16 flex flex-col md:flex-row min-h-screen py-10 gap-4">
  
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
  
        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <Outlet />
        </div>
  
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
