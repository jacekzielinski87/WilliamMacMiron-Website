import React from 'react';
import { FaInfo } from "react-icons/fa6";
import { MdLocalParking } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarDown = () => {
  const router = useRouter();

  return (
    <div className="bg-[#C8C8C8] p-4 border-2 border-black relative top-56 rounded-2xl w-[1200px] mx-auto">
      <ul className="">
        <li className="flex justify-around w-full">
          <Link 
            href="/components/Informations"
            className={`transition-colors ${
              router.pathname === '/components/Informations' 
                ? 'text-orange-500' 
                : 'text-black hover:text-slate-600'
            }`}
          >
            <FaInfo size={50} className='cursor-pointer'/>
          </Link>
          <Link 
            href="/components/Partners"
            className={`transition-colors ${
              router.pathname === '/components/Partners' 
                ? 'text-orange-500' 
                : 'text-black hover:text-slate-600'
            }`}
          >
            <MdLocalParking size={50} className='cursor-pointer'/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDown;