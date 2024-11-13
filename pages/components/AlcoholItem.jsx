import React from 'react';
import Thumbnail from '../../public/assets/cask.jpeg';
import Image from 'next/image';

const WhiskyCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className='flex justify-center items-center m-1 p-3'>
      <div className='bg-gray-400/90 w-[1200px] h-[360px] border-2 rounded-xl border-black shadow-2xl shadow-slate-700'>
        <ul className='list-none'>
          <li className='p-2 ml-3'>{data.name}</li>
        </ul>
        <div className='flex justify-start ml-4'>
          <Image 
            src={data.image || Thumbnail} 
            className='w-[200px] h-[200px] my-6 shadow-xl shadow-gray-900' 
            alt={`Thumbnail of ${data.name}`}
          />
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

const AlcoholItem = () => {
  const sampleWhisky = {
    name: "Macallan 1926 Fine & Rare, '263. 60Y0, 1986, 42.60%",
    image: Thumbnail,
    rating: 94,
    ratingText: "Great",
    intensity: 2,
    aroma: {
      score: 94,
      description: "sweet, slightly spicy, raisins, plum, white pepper, white chocolate, pineapple, apple, apricot, toffee, cocoa, oak, and mowed grass"
    },
    taste: {
      score: 95,
      description: "delicate, sweet, slightly bitter, grape, plum, raisins, marzipan, dark honey, white chocolate, aloe, oak, and cactus"
    },
    finish: {
      score: 94,
      description: "long, slightly spicy, plum, cherry dark bitter chocolate, krówka, white pepper, mint, nut, blackcurrant, allspice, and old oak"
    }
  };

  return (
    <div className='bg-slate-100'>
      <WhiskyCard data={sampleWhisky} />
      <WhiskyCard data={sampleWhisky} />
    </div>
  );
};

export default AlcoholItem;