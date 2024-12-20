import React from 'react';
import NavBar from './Navbar';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import Logo from './Logo';

const Alcohols = () => {
  const alcoholCategories = [
    "Whisky",
    "Rum",
    "Beer",
    "Wine",
    "Tequila",
    "Vodka",
    "Tincture",
    "Brandy",
    "Gin",
    "Liqueur",
    "Cider"
  ];

  return (
    <>
      <NavBar/>
      <NavbarLeft/>
      <NavbarRight/>
      <Logo/>
      <div className="flex">
        {/* Left aside */}
        <aside className="w-1/4 min-h-screen bg-[#8d8d8d] fixed left-0 top-0 pt-[90px] flex items-center justify-center">
        </aside>

        {/* Right aside */}
        <aside className="w-1/4 min-h-screen bg-[#8d8d8d] fixed right-0 top-0 pt-[90px] flex items-center justify-center">
        </aside>

        {/* Main Content */}
        <div className='flex justify-center flex-1 ml-[25%] mr-[25%] my-12'>
          <div>
              {alcoholCategories.map((category, index) => (
                  <div key={index} className=' p-2 m-4 flex items-center justify-center bg-[#C8c8c8] w-[880px] h-[40px] border-2 rounded-3xl border-black shadow-3xl shadow-slate-900  hover:bg-slate-300'>
                    <div>
                      <h3 className='cursor-pointer text-2xl font-serif text-black'>{category}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </>
  );
};

export default Alcohols;