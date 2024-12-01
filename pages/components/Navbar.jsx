import React from 'react';
import SearchBar from './Searchbar';
import MenuA  from "../../public/assets/menu1.png";
import MenuB from "../../public/assets/menu2.png";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavBar = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#C8c8c8] p-4 border-2 border-black rounded-b-3xl mx-auto w-[952px] fixed top-0 left-1/4 z-10 shadow-xl h-[50px]">
        <ul className="">
          <li className="flex justify-around items-center">
            <Link 
              href="/components/Alcohols"
              className={`transition-colors ${
                router.pathname === '/components/Alcohols' 
                  ? 'text-black' 
                  : 'text-black hover:text-slate-600'
              }`}
            >
              <Image src={MenuA} className='cursor-pointer relative bottom-3'/>
            </Link>
            <Link 
              href="/components/Others"
              className={`transition-colors ${
                router.pathname === '/components/Others' 
                  ? 'text-black' 
                  : 'text-black hover:text-slate-600'
              }`}
            >
              <Image src={MenuB} className='cursor-pointer relative bottom-3'/>
            </Link>
          </li>
        </ul>
      </div>
      <SearchBar />
    </>
  );
};

export default NavBar;