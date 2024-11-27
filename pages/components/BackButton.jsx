import React from 'react';
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className="absolute top-6 left-10 z-10 p-2 rounded-full border-2 border-[#c8c8c8] 
                hover:bg-gray-300 transition-colors"
    >
      <BiArrowBack size={50} />
    </button>
  );
};

export default BackButton;