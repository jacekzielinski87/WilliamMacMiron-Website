import React from 'react';
import Thumbail from '../../public/assets/cask.jpeg';
import Image from 'next/image';

const AlcoholItem = () => {
  return (
    <>
    <div className='flex justify-center m-2'>
    <div className='bg-neutral-300/60 h-[400px] w-1/2 font-bold border-2 border-gray-300 shadow-2xl shadow-slate-500'>
      <li className='ml-10 p-2'>Maccalan 1926 Fine & Rare, '263. 60Y0, 1986, 42.60%</li>
      <div className='ml-11 my-4 flex justify-start'>
        <Image src={Thumbail} alt="Thumbail of Alkohol"/>
        <div className='grid gap-4 ml-10 decoration-solid'>
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
    <div className='flex justify-center m-2'>
    <div className='bg-neutral-300/60 h-[400px] w-1/2 font-bold border-2 border-gray-300 shadow-2xl shadow-slate-500'>
      <li className='ml-10 p-2'>Maccalan 1926 Fine & Rare, '263. 60Y0, 1986, 42.60%</li>
      <div className='ml-11 my-4 flex justify-start'>
        <Image src={Thumbail} alt="Thumbail of Alkohol"/>
        <div className='grid gap-4 ml-10 decoration-solid'>
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
    </>
  )
}

export default AlcoholItem