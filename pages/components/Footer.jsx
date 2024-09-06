import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <>
    <div className='flex justify-center'>
    <div className='shadow-2xl shadow-slate-700 text-black rounded-xl flex justify-center items-center text-2xl w-1/3 h-[200px] bg-slate-200/90 border-2 border-black'>
      <SocialMedia/>
    </div>
    </div>
    <div className='flex justify-center items-end relative right-4 text-black w-[330px] h-[100px] m-2 text-sm font-bold '>
      <p className=''>All right reserved @ William MacMiron 2024</p>
    </div>
    
    </>
  )
}

export default Footer