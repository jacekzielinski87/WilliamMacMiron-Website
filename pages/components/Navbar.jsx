import React from 'react';
import SearchBar from './Searchbar';
import { LuMenu } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";


const NavBar = () => {
  return (
    <>
    <div className="bg-[#C8C8C8] p-3  border-2 border-black rounded-2xl ">
        <div className="">
          <div className="flex justify-evenly items-center">
            <LuMenu size={40} className='cursor-pointer'/>
            <TfiMenuAlt size={40} className='cursor-pointer'/>
          </div>
        </div>
    </div>
          <div className='flex justify-center'>
            <div className='absolute top-4 cursor-pointer'>
            <SearchBar/>
            </div>
          </div>
    </>
  );
};

export default NavBar;


