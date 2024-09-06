import React from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaInfo } from "react-icons/fa6";
import { MdLocalParking } from "react-icons/md";
import SearchBar from './Searchbar';
import Logo from '../../public/assets/Logo.jpg';


const Navbar = () => {

return (
    <>
    <div className='flex justify-between items-center bg-gray-600/20 p-2 w-2/3 m-auto rounded-xl border-2 border-black'>
        <div className='cursor-pointer'>
            <GiHamburgerMenu size={40}/>
        </div>
        <div className='cursor-pointer'>
            <TfiMenuAlt size={40}/>
        </div>
    </div>
        <div>
            <SearchBar/>
        </div>
   
    <div className='flex justify-between items-center fixed bottom-0 left-80 bg-gray-600/20 w-2/3 mx-auto rounded-xl border-2 border-black'>
       <div className='cursor-pointer'>
            <FaInfo size={40}/>
        </div>
        <div className=''>
            <Image src={Logo} className='rounded-2xl border-4 border-gray-400/90 h-[60px] w-[60px]' alt='william mac miron logo'/>
        </div>
        <div className='cursor-pointer'>
            <MdLocalParking size={40}/>
        </div>
    </div>
    </>
    
  )
}

export default Navbar