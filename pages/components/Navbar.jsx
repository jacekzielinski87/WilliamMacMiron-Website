import React from 'react';
import SearchBar from './Searchbar';
import { LuMenu } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";


const NavBar = () => {
  return (
    <nav className="bg-[#C8C8C8] p-4 border-4 border-black rounded-2xl ">
      <div className="container m-auto ">
       <div className="flex justify-around items-center">
          <div className='flex justify-around items-center'>
            <LuMenu size={40}/>
          </div>
            <SearchBar/>
          <div>
            <TfiMenuAlt size={40} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


