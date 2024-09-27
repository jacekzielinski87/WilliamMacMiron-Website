import React, { useState } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaInfo } from "react-icons/fa6";
import { MdLocalParking } from "react-icons/md";
import SearchBar from './Searchbar';
import Logo from '../../public/assets/Logo.jpg';
import Link from 'next/link';



const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

return (
    <>
        <div className = "md:flex md:justify-center md:items-end ml-20">
            <SearchBar />
        </div>
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <ul className='hidden'>
                <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Project</li>
                </Link>
                <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            
        

        <div className='sm:flex sm:items-center sm:justify-between'>
                <div onClick={handleNav} className='text-white flex'>
                    <GiHamburgerMenu size={40} />
                </div>
                <div onClick={handleNav} className='text-white flex'>
                    <TfiMenuAlt size={40} />
                </div>
            <div className=''>
          <div onClick={handleNav} className='text-white flex'>
                <FaInfo size={40} />
          </div>
          <div onClick={handleNav} className='text-white flex'>
                <MdLocalParking size={40} />
          </div>
          </div>
          
            </div>
            </div>
        

        
        <div className = {nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-gray-300' : ''}>
          <div className={nav ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-400/40 p-10 ease-in duration-500' : 
            'fixed left-[-100%] top-0  p-10 ease-in duration-500'
          }>
            <div>
            <div className='flex items-center justify-between'>
              <Image src={Logo} 
                  width='100' 
                  height='40' 
                  alt='/'
                  />
              </div>
            </div>
              <div className='py-4 flex-col text-[#3d3d46] font-bold'>
                <ul className='uppercase'>
                  <Link href='/'>
                  <li className='py-4 text-md'>Alcohol</li>
                  </Link>
                  <Link href='/'>
                  <li className='py-4 text-md'>Others</li>
                  </Link>
                  <Link href='/'>
                  <li className='py-4 text-md'>Informations</li>
                  </Link>
                  <Link href='/'>
                  <li className='py-4 text-md'>Partners</li>
                  </Link>
                </ul>
                <div className='pt-40'>
                  <p className='uppercase tracking-widest text-[#3d3d46] font-semibold'>Discover the true and unique taste of Whiskey</p>
                  <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                </div>
                </div>
                </div>
              </div>
            </div>
          
    </>
   
           
   
    
    
  )
}

export default Navbar