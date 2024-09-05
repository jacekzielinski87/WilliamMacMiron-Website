import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <>
    <div className='text-white text-2xl w-full h-[200px] flex justify-center items-center bg-black'>
      <SocialMedia/>
    </div>
    <div className='flex justify-center items-start text-white w-[330px] h-[100px] m-2 text-md relative top-4'>
      <p className=''>All right reserved @ William MacMiron 2024</p>
    </div>
    </>
  )
}

export default Footer