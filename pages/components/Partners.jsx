import React from 'react';
import Logo from '../../public/assets/partners.jpg';
import Image from 'next/image';
import BackButton from './BackButton';

const Partners = () => {
  return (
    <>
    <BackButton />
    <div className='flex flex-col items-center m-8'>
      <h1 className='text-4xl font-serif text-black mb-6 text-center'>
        <b>Our Partners</b>
      </h1>
      
      <p className='text-xl text-black font-serif text-center mb-8 max-w-2xl'>
        We collaborate with the finest distilleries and suppliers worldwide 
        to bring you exceptional whiskey experiences.
      </p>

      <div className='shadow-2xl shadow-slate-800 rounded-xl overflow-hidden'>
        <Image 
          src={Logo} 
          alt="Our Trusted Partners"
          className='w-full h-auto'
          priority
        />
      </div>

      <div className='mt-8 text-center max-w-3xl'>
        <h2 className='text-2xl font-serif text-black mb-4'>
          <b>Trusted Partnerships</b>
        </h2>
        <p className='text-lg text-gray-700 font-serif'>
          Our partnerships ensure that we can offer you the highest quality products
          and the most authentic whiskey experience possible.
        </p>
      </div>
    </div>
    </>
  );
};

export default Partners;