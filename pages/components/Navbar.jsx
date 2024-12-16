import React from 'react';
import MenuA from "../../public/assets/menu1.png";
import MenuB from "../../public/assets/menu2.png";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SearchBar from './Searchbar';

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center w-full z-10">
      <div className="bg-[#C8c8c8] p-4 border-2 border-black rounded-b-3xl 
        w-full mx-4 md:mx-0 
        md:w-[640px] lg:w-[952px] 
        h-[40px] shadow-2xl shadow-slate-500">
        <ul className="">
          <li className="flex justify-around gap-40"> {/* Changed space-x-4 to gap-16 */}
            <Link 
              href="/components/Alcohols"
              className={`transition-colors ${
                router.pathname === '/components/Alcohols' 
                  ? 'text-black' 
                  : 'text-black hover:text-slate-600'
              }`}
            >
              <Image 
                src={MenuA} 
                className='cursor-pointer relative bottom-2 w-auto h-[20px]'
                alt="Alcohols Menu"
              />
            </Link>
            <Link 
              href="/components/Others"
              className={`transition-colors ${
                router.pathname === '/components/Others' 
                  ? 'text-black' 
                  : 'text-black hover:text-slate-600'
              }`}
            >
              <Image 
                src={MenuB} 
                className='cursor-pointer relative bottom-2 w-auto h-[20px]'
                alt="Others Menu"
              />
            </Link>
          </li>
        </ul>
        <SearchBar/>
      </div>
    </div>
  );
};

export default NavBar;