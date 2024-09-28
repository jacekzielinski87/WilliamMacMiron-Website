import React from 'react';
import SearchBar from './Searchbar';
import { LuMenu } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";


const NavBar = () => {
  return (
    <nav className="bg-[#C8C8C8] p-4 flex border-4 border-black ">
      <div className="container mx-auto ">
       <ul className="flex justify-between items-center">
          <li>
            <LuMenu size={40}/>
          </li>
            <SearchBar/>
          <li>
            <TfiMenuAlt size={40} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;


