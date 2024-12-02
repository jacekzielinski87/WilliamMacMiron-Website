import React from 'react';
import Info from '../../public/assets/i.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';


const NavbarLeft = () => {
  const router = useRouter();

  return (
    <div className="bg-[#C8C8C8] h-[50px] border-2 border-black rounded-r-none rounded-t-3xl fixed bottom-0 right-1/2 w-[420px] flex items-center justify-center">
      <ul className="h-full w-full justify-center">
        <li className="flex justify-center items-center h-full">
          <Link 
            href="/components/Informations"
            className={`transition-colors ${
              router.pathname === '/components/Informations' 
                ? 'text-black' 
                : 'text-black hover:text-slate-600'
            }`}
          >
            <Image 
              src={Info} 
              className='cursor-pointer w-auto h-auto'
              alt="Information"
            />
          </Link>
        </li>
      </ul>
      <Link 
        href="/" 
        className="absolute -bottom-6 
          -right-[70px] hidden md:block"
      >
      </Link>
    </div>
  );
};
      

export default NavbarLeft;