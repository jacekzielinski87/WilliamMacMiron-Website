import React from 'react';
import SearchBar from './Searchbar';
import { BiSolidDrink } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#C8C8C8] p-3 border-2 border-black rounded-2xl">
        <ul className="">
          <li className="flex justify-evenly items-center">
            <Link 
              href="/components/Alcohols"
              className={`transition-colors ${
                router.pathname === '/components/Alcohols' 
                  ? 'text-orange-500' 
                  : 'text-black hover:text-slate-500'
              }`}
            >
              <BiSolidDrink size={50} className='cursor-pointer'/>
            </Link>
            <Link 
              href="/components/Partners"
              className={`transition-colors ${
                router.pathname === '/components/Others' 
                  ? 'text-orange-500' 
                  : 'text-black hover:text-slate-500'
              }`}
            >
              <TfiMenuAlt size={50} className='cursor-pointer'/>
            </Link>
          </li>
        </ul>
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