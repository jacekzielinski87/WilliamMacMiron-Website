// components/Sidebar.js
import React from "react";

const Sidebar = ({ onMenuClick }) => {
  const menuItems = [
    { name: "Dashboard", href: "dashboard" },
    { name: "Users", href: "users" },
    { name: "Settings", href: "settings" },
  ];

  return (
    <div className="h-screen w-64 bg-[#c8c8c8] text-white flex flex-col">
      <div className="p-4 text-lg font-bold border-b border-gray-400 text-black">
        Admin Panel
      </div>
      <nav className="mt-4 flex flex-col space-y-2 text-black">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onMenuClick(item.href)}
            className="text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
