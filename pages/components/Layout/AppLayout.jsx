import React from "react";
import Navbar from "../Layout/Navbar";
import NavbarDown from "../Layout/NavbarDown";
import { useSearch } from "../Ui/SearchContext";

const AppLayout = ({ children }) => {
  const { showResults } = useSearch();

  if (showResults) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-gray-100">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100">
      <Navbar />
      <NavbarDown />
      <div className="relative">
        {/* Main Content */}
        <main className="pt-24 pb-[80px] px-4 md:px-8 lg:px-16 relative z-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
