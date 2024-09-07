import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <>
    <div className='flex justify-center items-center'>
    <div className='text-black'>
        <h1 className=' border-black border-2 p-1 ml-3 mb-4 shadow-lg rounded-xl shadow-slate-700 w-[210px] relative top-2'>Social Media Links</h1>
        <div className=' flex items-center my-6 gap-8 cursor-pointer p-2'>
            <BsLinkedin size={30} className='transition-all duration-300 hover hover:bg-orange-500  border-orange-700 hover:rounded-sm '/>
            <BiLogoFacebookCircle size={30} className=' transition-all duration-300 hover hover:bg-orange-500 hover:border-orange-700 hover:rounded-sm '/>
            <BsInstagram size={30} className=' transition-all duration-300 hover hover:bg-orange-500 hover:rounded-sm'/>
            <BsTwitter size={30} className=' transition-all duration-300 hover hover:bg-orange-500 hover:rounded-sm'/>
        </div>
    </div>
    </div>
    </>
  )
}

export default SocialMedia