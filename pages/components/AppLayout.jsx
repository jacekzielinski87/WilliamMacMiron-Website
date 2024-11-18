import React from 'react';
import Navbar from './Navbar';
import NavbarDown from './NavbarDown';
import WelcomeMessage from './WelcomeMessage';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <NavbarDown />
      <WelcomeMessage/>
      
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 min-h-screen bg-[#000000] fixed left-0 top-0 pt-[120px] ">
          {/* Add your sidebar content here */}
        </aside>

        {/* Right Sidebar */}
        <aside className="w-64 min-h-screen bg-[#0a0a0a] fixed right-0 top-0 pt-[120px] ">
          {/* Add your sidebar content here */}
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 mr-64 pt-[120px]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;