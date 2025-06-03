import React from "react";
import Navbar from "../Layout/Navbar";
import NavbarDown from '../Layout/NavbarDown';
import Logo from "../Ui/Logo";


const AppLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-x-hidden bg-[url(/assets/bg.png)]">
      <Navbar />
      <NavbarDown/>
    <div className="relative">
        
{/* Main Content */}
        <main className="pt-16 px-4 md:px-8 lg:px-16 relative z-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
