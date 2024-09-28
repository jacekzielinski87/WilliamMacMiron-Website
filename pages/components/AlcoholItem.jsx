import React from 'react';
import Thumbail from '../../public/assets/cask.jpeg';
import Image from 'next/image';

const AlcoholItem = () => {
  return (
    <>
    <div className='bg-slate-100'>
    <div className='flex justify-center items-center m-1 p-3'>
    <div className='bg-gray-400/90 w-[1200px] h-[360px] border-2 rounded-xl border-black shadow-2xl shadow-slate-700'>
      <li className='p-2 ml-3'>Maccalan 1926 Fine & Rare, '263. 60Y0, 1986, 42.60%</li>
      <div className=' flex justify-start ml-4'>
        <Image src={Thumbail} className='w-[200px] h-[200px] my-6 shadow-xl shadow-gray-900' alt="Thumbail of Alkohol"/>
        <div className='grid gap-4 decoration-solid ml-6 p-4'>
          <li>Rating: 94/100</li>
          <li>Aroma:94/100, sweet, slighlty spicy, raisins, plum, white pwpper, white chocolate,<br/> pineapple, apple, apricot, toffi, cocoa, oak, and mowed grass.</li>
          <li>Taste:95/100, delicate, sweet, slightly bitter, grape, pluum, raisins,<br/> marzipan, dark honey, white chocolate, aloe, oak, and cactus.</li>
          <li>Finish:94/100, long, slighlty spicy, plum, cherry dark bitter chocolate,<br/> krówka, white pepper, mint, nut, blackcurrant, allspice, and old oak<br/></li>
          <li>(WHISKY) - Whisky/Whiskey: 94-96- Great</li>
          <li>Intensity from 1 to 3</li>
        </div>
      </div>
    </div>
    </div>
    <div className='flex justify-center items-center m-1 p-3'>
    <div className='bg-gray-400/90 w-[1200px] h-[360px] border-2 rounded-xl border-black shadow-2xl shadow-slate-500'>
      <li className='p-2 ml-3'>Maccalan 1926 Fine & Rare, '263. 60Y0, 1986, 42.60%</li>
      <div className='flex justify-start ml-4'>
        <Image src={Thumbail} className='w-[200px] h-[200px] my-6 shadow-xl shadow-gray-900' alt="Thumbail of Alkohol"/>
        <div className='grid gap-4 decoration-solid ml-6 p-4'>
          <li>Rating: 94/100</li>
          <li>Aroma:94/100, sweet, slighlty spicy, raisins, plum, white pwpper, white chocolate,<br/> pineapple, apple, apricot, toffi, cocoa, oak, and mowed grass.</li>
          <li>Taste:95/100, delicate, sweet, slightly bitter, grape, pluum, raisins,<br/> marzipan, dark honey, white chocolate, aloe, oak, and cactus.</li>
          <li>Finish:94/100, long, slighlty spicy, plum, cherry dark bitter chocolate,<br/> krówka, white pepper, mint, nut, blackcurrant, allspice, and old oak<br/></li>
          <li>(WHISKY) - Whisky/Whiskey: 94-96- Great</li>
          <li>Intensity from 1 to 3</li>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default AlcoholItem