import React from 'react';
import Mortlach70 from '../../public/assets/MORTLA1.PNG';
import Mortlach75 from '../../public/assets/MORTLA2.PNG';
import Raiting from '../../public/assets/Raiting1.png';
import Image from 'next/image';

const AlcoholItem = () => {
  const renderIntensityLevel = (level) => {
    return "•".repeat(level);
  };

  const mortlachData = [
    {
      name: "Mortlach 70 Year Old Generations '2656 (1938) (2008) (Gordon and MacPhail) (46.10% ABV)",
      image: Mortlach70,
      aroma: {
        score: 91,
        notes: "sweet², flowers³, tobacco², kiwi¹, orange¹, plum¹, black tea¹, aloe¹, clove¹, tangerine¹, nut¹"
      },
      taste: {
        score: 90,
        notes: "bitter¹, warming¹, smoky², walnut², black tea², clove¹, mandarin¹, butter¹, tobacco¹, salt¹, pear¹"
      },
      finish: {
        score: 90,
        notes: "long², bitter³, smoky², wood², unripe apple², cinnamon², black pepper¹, mushrooms¹, onion¹"
      },
      intensity: 2
    },
    {
      name: "Mortlach 75 Year Old Generations '2475 (1939) (2015) (Gordon and MacPhail) (44.40% ABV)",
      image: Mortlach75,
      aroma: {
        score: 95,
        notes: "sweet², smoky², tangerine³, blueberry², oak², grass², cocoa¹, gooseberry¹, straw¹, earth¹, mint¹, pomegranate¹, bay leaf¹"
      },
      taste: {
        score: 94,
        notes: "sweet², bitter¹, slightly spicy², red grapefruit², mango², coconut¹, green pepper¹, mirabelle plum¹, tobacco¹, passion fruit¹"
      },
      finish: {
        score: 95,
        notes: "long³, sweet², slightly spicy², honey³, nut³, pineapple², plum¹, aloe¹, leather¹, vanilla¹, salt¹, wood¹, anise¹, coffee¹, yeast¹, bread¹, salt¹"
      },
      intensity: 3
    }
  ];

  return (
    <div className='flex flex-col gap-6 mx-auto my-24'>
      {mortlachData.map((whiskey, index) => (
        <div key={index} className='flex justify-center items-center m-1 p-2 w-1/2 mx-auto'>
          <div className='bg-[#C8c8c8] w-[1200px] h-[360px] border-2 rounded-2xl border-black shadow-2xl shadow-slate-700 relative'>
            <ul className='list-none '>
              <li className='p-3 ml-3 font-serif text-sm font-bold'>
                {whiskey.name}
              </li>
            </ul>
            <div className='flex justify-start ml-4'>
              <Image 
                src={whiskey.image}
                className='w-[200px] h-[200px] my-6 shadow-xl shadow-gray-900 ' 
                alt={`Thumbnail of ${whiskey.name}`}
              />
              {/* Rating Note */}
              <div className='absolute top-10 left-40'>
                <Image 
                  src={Raiting}
                  width={80}
                  height={80}
                  className='object-contain'
                  alt="Rating Note"
                  priority
                />
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold'>
                  {whiskey.rating}
                </span>
              </div>
              <ul className='grid gap-4 decoration-solid ml-6 p-6 font-serif text-sm font-bold'>
                <li>Rating: {whiskey.rating}/100, (61-100)</li>
                <li>
                  Aroma: {whiskey.aroma.score}/100, {whiskey.aroma.notes}
                </li>
                <li>
                  Taste: {whiskey.taste.score}/100, {whiskey.taste.notes}
                </li>
                <li>
                  Finish: {whiskey.finish.score}/100, {whiskey.finish.notes}
                </li>
                <li>Intensity: {renderIntensityLevel(whiskey.intensity)}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlcoholItem;