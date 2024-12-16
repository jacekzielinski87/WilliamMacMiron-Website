import React from 'react';
import NavBar from './Navbar';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import Logo from './Logo';

const Alcohols = () => {
  const alcoholList = [
    { number: 1, name: "Whiskey", varieties: "Single Malt, Bourbon, Scotch" },
    { number: 2, name: "Vodka", varieties: "Plain, Flavored, Premium" },
    { number: 3, name: "Gin", varieties: "London Dry, Plymouth, Contemporary" },
    { number: 4, name: "Rum", varieties: "White, Dark, Spiced" },
    { number: 5, name: "Tequila", varieties: "Blanco, Reposado, Añejo" }
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
        <div className='flex-1 ml-[25%] mr-[25%]'>
          <div className='flex flex-col items-center m-8'>
            <h1 className='text-4xl font-serif text-black mb-6 text-center m-14'>
              Spirits Guide
            </h1>

            {/* Alcohol List Section */}
            <div className='w-full max-w-2xl mb-8'>
              <h2 className='text-2xl font-serif text-black mb-6 ml-6'>Popular Spirits</h2>
              <div className='space-y-4'>
                {alcoholList.map((alcohol) => (
                  <div key={alcohol.number} className='bg-slate-100 p-4 rounded-lg shadow flex items-center'>
                    <span className='text-3xl font-serif text-amber-600 mr-6'>
                      {alcohol.number}
                    </span>
                    <div>
                      <h3 className='text-xl font-serif text-black'>{alcohol.name}</h3>
                      <p className='text-gray-600'>{alcohol.varieties}</p>
                    </div>
                  </div>
                ))}
                  </div>
                </div>
                </div>
              </div>
            </div>
              
            
          
        

        {/* Right Sidebar */}
        
      
    </>
);
};

export default Alcohols;