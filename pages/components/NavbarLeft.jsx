import React from 'react';
import { FaInfo } from "react-icons/fa6";
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarLeft = () => {
  const router = useRouter();

  return (
    <div className="bg-[#C8C8C8] h-16 border-2 border-black rounded-t-3xl fixed bottom-0 left-80 w-[640px]">
      <ul className="h-full">
        <li className="flex justify-center items-center h-full">
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
        </li>
      </ul>
    </div>
  );
};

export default NavbarLeft;