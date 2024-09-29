import React from 'react'
import Logo from '../../public/assets/partners.jpg';
import Image from 'next/image';

const Partners = () => {
  return (
    <div className='flex justify-center items-center m-8'>
      <div className='shadow-2xl shadow-slate-800'>
        <Image src={Logo} alt="Thumbail"></Image>
      </div>
    </div>
  )
}

export default Partners