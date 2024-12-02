import React from 'react';
import NavBar from './Navbar';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import Logo from './Logo';

const Alcohols = () => {
  const whiskeyTypes = [
    {
      title: "Single Malt Scotch",
      description: "Made from 100% malted barley at a single distillery in Scotland. Known for complex flavors ranging from light and floral to rich and peated.",
      examples: ["Macallan", "Glenlivet", "Lagavulin"],
      characteristics: ["Rich", "Complex", "Often peated", "Aged in oak"]
    },
    {
      title: "Bourbon",
      description: "American whiskey made from at least 51% corn. Known for sweet, full-bodied flavor with vanilla and caramel notes.",
      examples: ["Jim Beam", "Maker's Mark", "Buffalo Trace"],
      characteristics: ["Sweet", "Vanilla", "Caramel", "Oak"]
    },
    {
      title: "Irish Whiskey",
      description: "Triple-distilled whiskey from Ireland. Smooth and approachable with a lighter character.",
      examples: ["Jameson", "Bushmills", "Redbreast"],
      characteristics: ["Smooth", "Light", "Fruity", "Gentle"]
    },
    {
      title: "Japanese Whisky",
      description: "Crafted in the Scottish tradition but with Japanese precision. Known for refinement and balance.",
      examples: ["Yamazaki", "Hibiki", "Nikka"],
      characteristics: ["Refined", "Balanced", "Complex", "Subtle"]
    }
  ];

  return (
    <>
    <NavBar/>
    <NavbarLeft/>
    <NavbarRight/>
    <Logo/>
    <div className="flex items-center">
        {/* Left Sidebar */}
        <aside className="w-80 min-h-screen bg-[#8d8d8d] fixed left-0 top-0 pt-[90px] ">
          {/* Add your sidebar content here */}
        </aside>

        {/* Right Sidebar */}
        <aside className="w-80 min-h-screen bg-[#8d8d8d] fixed right-0 top-0 pt-[90px] ">
          {/* Add your sidebar content here */}
        </aside>
    </div>
    <div className='flex flex-col items-center m-8'>
      <h1 className='text-4xl font-serif text-black mb-6 text-center m-14'>
        Whiskey Types Guide
      </h1>
      
      <p className='text-xl text-black font-serif text-center mb-8 max-w-2xl'>
        Discover the rich and diverse world of whiskey. Each type has its own unique 
        characteristics, production methods, and historical significance.
      </p>

      <div className='grid gap-8 md:grid-cols-2 max-w-6xl'>
        {whiskeyTypes.map((type, index) => (
          <div key={index} className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              {type.title}
            </h2>
            <p className='text-lg text-gray-700 font-serif mb-4'>
              {type.description}
            </p>
            <div className='mb-4'>
              <h3 className='text-lg font-serif text-black mb-2'>Notable Brands:</h3>
              <ul className='list-disc ml-6 text-gray-700'>
                {type.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-serif text-black mb-2'>Key Characteristics:</h3>
              <div className='flex flex-wrap gap-2'>
                {type.characteristics.map((char, i) => (
                  <span 
                    key={i}
                    className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm'
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-slate-100 p-6 rounded-xl shadow-lg mt-8 max-w-4xl'>
        <h2 className='text-2xl font-serif text-black mb-4 text-center'>
          The Art of Whiskey Making
        </h2>
        <p className='text-lg text-gray-700 font-serif text-center'>
          Whiskey production is a careful balance of tradition and innovation. From grain 
          selection to aging in oak barrels, each step contributes to the final character 
          of the spirit. The region, climate, and local traditions all play crucial roles 
          in creating unique flavor profiles that whiskey enthusiasts have come to love 
          and appreciate.
        </p>
      </div>
    </div>
    </>
  );
};

export default Alcohols;