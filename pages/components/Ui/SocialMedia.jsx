import React from 'react';
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";

const SocialMedia = () => {
  const socialLinks = [
    { Icon: BsLinkedin, href: '#', label: 'LinkedIn' },
    { Icon: BiLogoFacebookCircle, href: '#', label: 'Facebook' },
    { Icon: BsInstagram, href: '#', label: 'Instagram' },
    { Icon: BsTwitter, href: '#', label: 'Twitter' }
  ];

  return (
    <div className='flex justify-center items-center'>
      <div className='text-black'>
        <h1 className='border-black p-1 ml-3 mb-4 
                       shadow-lg rounded-xl shadow-slate-700 
                       w-[210px] relative top-2'>
          Social Media Links
        </h1>
        <div className='flex items-center my-6 gap-8 p-2'>
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className='cursor-pointer'
            >
              <Icon 
                size={30} 
                className='transition-all duration-300 
                          hover:bg-orange-500 hover:rounded-sm'
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;