import React from "react";
import Navbar from "./Navbar";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import Logo from "./Logo";
import WelcomeMessage from "./WelcomeMessage";
import LoginPanel from "./LoginPanel";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <LoginPanel/>
      <Navbar />
      <NavbarLeft />
      <NavbarRight />
      <Logo />

      <div className="">
        {/* Left Sidebar */}
        <aside className="w-1/4 h-screen bg-[#8d8d8d] fixed  left-0 top-0">
          {/* Add your sidebar content here */}
        </aside>

        {/* Right Sidebar */}
        <aside className="w-1/4 h-screen bg-[#8d8d8d] fixed right-0 top-0">
          {/* Add your sidebar content here */}
        </aside>

        {/* Main Content - Increased margins */}
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
