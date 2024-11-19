import React from 'react';
import Navbar from './Navbar';
import NavbarDown from './NavbarDown';
import WelcomeMessage from './WelcomeMessage';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WelcomeMessage/>
      <NavbarDown />
      
      <div className="flex items-center">
        {/* Left Sidebar */}
        <aside className="w-[351px] min-h-screen bg-[#000000] fixed left-0 top-0 pt-[90px] ">
          {/* Add your sidebar content here */}
        </aside>

        {/* Right Sidebar */}
        <aside className="w-[351px] min-h-screen bg-[#0a0a0a] fixed right-0 top-0 pt-[90px] ">
          {/* Add your sidebar content here */}
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-48 mr-48 pt-[90px]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;