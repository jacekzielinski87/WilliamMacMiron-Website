import React from 'react';
import Logo from '../../public/assets/partners.jpg';
import Image from 'next/image';
import BackButton from './BackButton';
import NavBar from './Navbar';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

const Partners = () => {
  return (
    <>
    <BackButton />
    <NavBar/>
    <NavbarLeft/>
    <NavbarRight/>

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
      <h1 className='text-4xl font-serif text-black mb-6 text-center m-14'>
        <b>Our Partners</b>
      </h1>
      
      <p className='text-xl text-black font-serif text-center mb-8 max-w-2xl'>
        We collaborate with the finest distilleries and suppliers worldwide 
        to bring you exceptional whiskey experiences.
      </p>

      <div className='shadow-2xl shadow-slate-800 rounded-xl overflow-hidden'>
        <Image 
          src={Logo} 
          alt="Our Trusted Partners"
          className='w-full h-auto'
          priority
        />
      </div>

      <div className='mt-8 text-center max-w-3xl'>
        <h2 className='text-2xl font-serif text-black mb-4'>
          <b>Trusted Partnerships</b>
        </h2>
        <p className='text-lg text-gray-700 font-serif'>
          Our partnerships ensure that we can offer you the highest quality products
          and the most authentic whiskey experience possible.
        </p>
      </div>
    </div>
    </>
  );
};

export default Partners;