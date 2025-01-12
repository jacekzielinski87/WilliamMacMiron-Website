import React from 'react';
import NavBar from './Navbar';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import Logo from './Logo';

const Others = () => {
  
    const OthersStuff = [
      "Pizza",
      "Perfume",
      "Toys"
    ];


  return (
    <>
    <NavBar/>
    <NavbarLeft/>
    <NavbarRight/>
    <Logo/>
    <div className="flex justify-center">
        {/* Left Sidebar */}
        <aside className="w-1/4 min-h-screen bg-[#8d8d8d] fixed left-0 top-0 pt-[90px] ">
          {/* Add your sidebar content here */}
        </aside>

        {/* Right Sidebar */}
        <aside className="w-1/4 min-h-screen bg-[#8d8d8d] fixed right-0 top-0 pt-[90px] ">
          {/* Add your sidebar content here */}
        </aside>
    </div>
    <div className="flex justify-center my-12 flex-1 ml-[25%] mr-[25%]">
      <div className="cursor-pointer text-2xl font-serif text-black ">
        {OthersStuff.map((item, index) => (
          <ul key={index} className=' p-2 m-4 items-center hover:bg-slate-300 bg-[#C8c8c8] w-[880px] h-[40px] border-2 flex justify-center border-black shadow-3xl shadow-slate-900 rounded-3xl'>{item}</ul>
        ))}
      </div>
    </div>
</>
  );
};

export default Others;