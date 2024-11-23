import React from 'react';
import Thumbnail from '../../public/assets/cask.jpeg';
import Note from '../../public/assets/Note.png';
import Image from 'next/image';

const AlcoholItem = ({ data }) => {
  if (!data) return null;

  return (
    <div className='flex justify-center items-center m-1 p-2 w-1/2 mx-auto'>
      <div className='bg-gray-300/90 w-[1200px] h-[360px] border-2 rounded-xl border-black shadow-2xl shadow-slate-700 relative'>
        <ul className='list-none'>
          <li className='p-2 ml-3'>{data.name}</li>
        </ul>
        <div className='flex justify-start ml-4'>
          <Image 
            src={data.image || Thumbnail} 
            className='w-[200px] h-[200px] my-6 shadow-xl shadow-gray-900' 
            alt={`Thumbnail of ${data.name}`}
          />
          {/* Added Note image */}
          <div className='absolute top-0 right-6'>
            <Image 
              src={Note}
              width={100}
              height={80}
              className='object-contain'
              alt="Rating Note"
              priority
            />
            <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold'>
              {data.rating}
            </span>
          </div>
          <ul className='grid gap-4 decoration-solid ml-6 p-4'>
            <li>Rating: {data.rating}/100</li>
            <li>Aroma: {data.aroma.score}/100, {data.aroma.description}</li>
            <li>Taste: {data.taste.score}/100, {data.taste.description}</li>
            <li>Finish: {data.finish.score}/100, {data.finish.description}</li>
            <li>Whisky/Whiskey: {data.rating}-{data.rating + 2} - {data.ratingText}</li>
            <li>Intensity: {data.intensity}/3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AlcoholItem;