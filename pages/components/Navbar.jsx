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
    <div className=''>
    <div className='bg-gray-700 flex justify-between p-2 m-20 w-[1750px] h-[60px]'>
        <div>
            <GiHamburgerMenu size={40} />
        </div>
        <div>
            <SearchBar/>
        </div>
        <div>
            <TfiMenuAlt size={40} />
        </div>
    </div>
    <div className=''>
    <div className='bg-gray-700 p-2 m-20 absolute bottom-0 w-[1750px] h-[60px]'>
        <div className='flex justify-between items-center'>
        <div>
            <FaInfo size={40} />
        </div>
        <div>
            <MdLocalParking size={40} />
        </div>
        </div>
    </div>
    </div>
    <div className='flex justify-center items-center'>
    <div className='flex justify-center'>
            <Image src={Logo} className='p-6 absolute bottom-14' alt='william mac miron logo'/>
    </div>
    </div>
   </div>
    </>
    
  )
}

export default Navbar