import React from 'react';
import { TbLetterP } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '../../public/assets/logo.png';

const NavbarRight = () => {
  const router = useRouter();

  return (
    <div className="bg-[#C8C8C8] h-16 border-2 border-black rounded-t-3xl fixed bottom-0 right-80 w-[640px]">
      <ul className="h-full">
        <li className="flex justify-center items-center h-full relative">
          {/* Logo on the left side */}
          <Link href="/" className="absolute -left-10 -top-8">
            <Image 
              src={Logo}
              alt="Logo"
              width={80}
              height={80}
              className="cursor-pointer hover:scale-110 transition-transform border-2 border-black rounded-t-2xl m-4"
            />
          </Link>

          <Link 
            href="/components/Partners"
            className={`transition-colors ${
              router.pathname === '/components/Partners' 
                ? 'text-orange-500' 
                : 'text-black hover:text-slate-600'
            }`}
          >
            <TbLetterP size={50} className='cursor-pointer font-semibold'/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarRight;