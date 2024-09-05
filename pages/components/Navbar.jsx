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
    <div className='flex justify-around items-center bg-gray-600 p-2 w-screen rounded-xl'>
        <div>
            <GiHamburgerMenu size={40} />
        </div>
        
        <div>
            <TfiMenuAlt size={40} />
        </div>
    </div>
        <div>
            <SearchBar/>
        </div>
   
    <div className=' bg-gray-600 fixed bottom-0 w-full rounded-xl'>
        <div className='flex justify-around items center p-2'>
        <div className=''>
            <FaInfo size={40} className='flex' />
        </div>
        <div>
            <MdLocalParking size={40} />
        </div>
        </div>
    </div>
    <div className=''>
    <div className='flex justify-center items-center'>
            <Image src={Logo} className='fixed bottom-0 rounded-2xl' alt='william mac miron logo'/>
    </div>
    </div>
    </>
    
  )
}

export default Navbar