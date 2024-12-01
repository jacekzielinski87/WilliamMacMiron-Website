import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '../../public/assets/logo.png';

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');  // This will navigate to the root path (AppLayout)
  };

  return (
    <button 
      onClick={() => router.back()}
      className="absolute bottom-6 left-10 z-10 p-2 rounded-full border-2 border-[#c8c8c8] 
                hover:bg-gray-300 transition-colors"
    >
      <Image className='border-2 rounded-xl hover:bg-gray-300 border-[#c8c8c8] '
        src={Logo}
        alt="Logo"
        width={60}
        height={60}
        priority
      />
    </button>
  );
};

export default BackButton;