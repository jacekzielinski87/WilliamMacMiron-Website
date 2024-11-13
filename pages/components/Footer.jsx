import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center'>
      <div className='flex justify-center my-7'>
        <div className='shadow-2xl shadow-slate-700 text-black rounded-xl 
                        flex justify-center text-2xl 
                         bg-slate-200/90 border-2'>
          <SocialMedia />
        </div>
      </div>
      <div className='text-black text-sm font-bold mb-4'>
        <p>&copy; {new Date().getFullYear()} William MacMiron. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;