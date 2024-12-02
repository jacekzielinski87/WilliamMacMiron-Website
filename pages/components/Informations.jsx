import React from 'react';
import NavBar from './Navbar';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import Logo from './Logo';

const Informations = () => {
  return (
    <>
    <NavBar/>
    <NavbarLeft/>
    <NavbarRight/>
    <Logo/>
    <div className="flex items-center">
        {/* Left Sidebar */}
        <aside className="w-80 min-h-screen bg-[#8d8d8d] fixed left-0 top-0 pt-[90px] ">
          {/* Add your sidebar content here */}
        </aside>

        {/* Right Sidebar */}
        <aside className="w-80 min-h-screen bg-[#8d8d8d] fixed right-0 top-0 pt-[90px] ">
          {/* Add your sidebar content here */}
        </aside>
    </div>
    <div className='flex flex-col items-center m-8'>
    <div className='w-[950px] bg-amber-300 p-4 mb-8 rounded-lg border border-amber-500 absolute bottom-12 flex justify-center'>
        <p className='text-sm text-red-800 text-center font-serif opacity-80 w-[800px] relative bottom-0'>
          <span className='font-bold'>Age Restriction Notice:<br/> </span>
          The content on this page is intended for individuals of legal drinking age (21+ in the US, 18+ in most other countries).
          Please consume alcohol responsibly.
        </p>
      </div>
      <h1 className='text-4xl font-serif text-black mb-6 text-center m-14'>
        <b>Information Center</b>
      </h1>
      
      <div className='max-w-4xl mx-auto text-center'>
        <p className='text-xl text-black font-serif mb-8'>
          Welcome to our Information Center. Here you'll find everything you need to know
          about our whiskey collection, services, and expertise.
        </p>

        <div className='grid gap-8 md:grid-cols-2 mt-8'>
          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              About Our Whiskey
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Discover our carefully curated selection of premium whiskeys from around the world.
              Learn about different styles, regions, and tasting notes.
            </p>
          </div>

          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              Expert Guidance
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Our team of whiskey experts is here to help you find the perfect bottle
              and answer any questions you might have about our collection.
            </p>
          </div>

          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              Services & Events
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Join our tasting events, educational sessions, and exclusive member programs
              to enhance your whiskey journey.
            </p>
          </div>

          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              Contact & Support
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Need assistance? Our customer service team is ready to help with any inquiries
              about our products and services.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Informations;