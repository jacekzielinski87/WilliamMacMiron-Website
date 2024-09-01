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
    <div className='bg-gray-500 flex justify-between p-2 my-6'>
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
    <div className='bg-gray-500 flex justify-between p-2 my-6 absolute bottom-0 w-full'>
        <div>
            <FaInfo size={40} />
        </div>
        <div>
            <MdLocalParking size={40} />
        </div>
    </div>
    <div className='flex justify-center items-center absolute bottom-6 left-1/2 transform -translate-x-1/2'>
            <Image src={Logo} className='' alt='william mac miron logo'/>
    </div>
    </>
    
  )
}

export default Navbar