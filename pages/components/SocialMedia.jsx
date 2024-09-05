import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <>
    <div className='flex justify-center'>
    <div className='text-white m-8'>
        <h1 className='p-2 ml-3 mb-4 shadow-lg rounded-xl shadow-slate-600 w-[210px] relative top-2'>Social Media Links</h1>
        <div className='flex gap-8 cursor-pointer p-2'>
            <BsLinkedin size={30} />
            <BiLogoFacebookCircle size={30} />
            <BsInstagram size={30} />
            <BsTwitter size={30} />
        </div>
    </div>
    </div>
    </>
  )
}

export default SocialMedia