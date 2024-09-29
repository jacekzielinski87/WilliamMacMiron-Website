import React from 'react';
import SearchBar from './Searchbar';
import { LuMenu } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";


const NavBar = () => {
  return (
    <>
    <div className="bg-[#C8C8C8] p-4  border-2 border-black w-full rounded-2xl ">
        <div className="">
          <div className="flex justify-between items-center">
            <LuMenu size={40}/>
            <SearchBar/>
            <TfiMenuAlt size={40}/>
          </div>
        </div>
    </div>
    </>
  );
};

export default NavBar;


