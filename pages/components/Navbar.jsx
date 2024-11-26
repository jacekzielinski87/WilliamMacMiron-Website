import React from 'react';
import SearchBar from './Searchbar';
import { TfiMenu } from "react-icons/tfi";
import { TfiMenuAlt } from "react-icons/tfi";
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#C8c8c8] p-4 border-2 border-black rounded-b-3xl mx-auto w-[1264px] fixed top-0 left-80 z-10">
        <ul className="">
          <li className="flex justify-around items-center">
            <Link 
              href="/components/Alcohols"
              className={`transition-colors ${
                router.pathname === '/components/Alcohols' 
                  ? 'text-orange-500' 
                  : 'text-black hover:text-slate-600'
              }`}
            >
              <TfiMenu size={50} className='cursor-pointer'/>
            </Link>
            <Link 
              href="/components/Others"
              className={`transition-colors ${
                router.pathname === '/components/Others' 
                  ? 'text-orange-500' 
                  : 'text-black hover:text-slate-600'
              }`}
            >
              <TfiMenuAlt size={50} className='cursor-pointer'/>
            </Link>
          </li>
        </ul>
      </div>
      <SearchBar />
    </>
  );
};

export default NavBar;