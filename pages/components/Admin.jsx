// pages/admin.js
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

const Admin = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const renderContent = () => {
    if (!isVisible) {
      return <div className="p-6 text-center">Dashboard is hidden</div>;
    }
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <div className="p-6">Users Page Content</div>;
      case "settings":
        return <div className="p-6">Settings Page Content</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex">
      {isVisible && (
        <Sidebar onMenuClick={setActivePage} />
      )}

     

        {/* Toggle Button */}
        <div className="p-4 absolute bottom-0 text-right">
          <button
            onClick={toggleVisibility}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            {isVisible ? "Close Dashboard & Sidebar" : "Show Dashboard & Sidebar"}
          </button>
        </div>

        {/* Render Content */}
        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      </div>
    );
};

export default Admin;
