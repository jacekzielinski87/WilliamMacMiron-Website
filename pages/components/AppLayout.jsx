import React from 'react';
import Navbar from './Navbar';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import Logo from './Logo';



const AppLayout = ({ children }) => {
  const sampleData = {
    name: "Sample Whiskey",
    rating: 85,
    aroma: { score: 88, description: "Rich and complex" },
    taste: { score: 86, description: "Smooth and balanced" },
    finish: { score: 84, description: "Long lasting" },
    ratingText: "Excellent",
    intensity: 2
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <NavbarLeft />
      <NavbarRight />
      <Logo/>
      
      <div className="flex items-center">
        {/* Left Sidebar */}
        <aside className=" w-1/4 min-h-screen bg-[#8d8d8d] fixed left-0 top-0 pt-[90px]">
          {/* Add your sidebar content here */}
        </aside>

        {/* Right Sidebar */}
        <aside className=" w-1/4 min-h-screen bg-[#8d8d8d] fixed right-0 top-0 pt-[90px]">
          {/* Add your sidebar content here */}
        </aside>

        {/* Main Content - Increased margins */}
        <main className="flex-1 ml-[400px] mr-[400px] pt-[90px]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;