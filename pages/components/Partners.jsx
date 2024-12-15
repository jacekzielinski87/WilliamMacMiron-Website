import React, { useState } from 'react';
import Image from 'next/image';
import NavBar from './Navbar';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import LogoComponent from './Logo';

const partnersData = [
  {
    id: 1,
    name: "Bowmore",
    image: "/assets/bowmore.jpg",
    description: "Located in the Scottish Highlands, this distillery has been crafting premium single malt whiskey since 1779.",
    location: "Scotland",
    specialties: ["Single Malt", "Aged Whiskey"],
    established: 1779
  },
  // Add more partners
];

// ... imports remain the same ...

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
  };

  return (
    <>
      <NavBar/>
      <NavbarLeft/>
      <NavbarRight/>
      <LogoComponent/>
      <div className="flex items-center">
        <aside className="w-1/4 min-h-screen bg-[#8d8d8d] fixed left-0 top-0 pt-[90px]" />
        <aside className="w-1/4 min-h-screen bg-[#8d8d8d] fixed right-0 top-0 pt-[90px]" />
      </div>

      <div className='flex flex-col items-center mx-auto w-1/2 pt-[90px]'>
        {!selectedPartner && (
          <>
            <h1 className='text-4xl font-serif text-black mb-6 text-center'>
              <b>Our Partners</b>
            </h1>

            {/* Partner List - only shown when no partner is selected */}
            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              {partnersData.map((partner) => (
                <button
                  key={partner.id}
                  onClick={() => handlePartnerClick(partner)}
                  className='px-6 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all'
                >
                  {partner.name}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Partner Details */}
        {selectedPartner ? (
          <div className='bg-white p-6 rounded-lg shadow-lg w-full'>
            {/* Add a back button */}
            <button 
              onClick={() => setSelectedPartner(null)}
              className='mb-4 px-4 py-2 text-sm rounded-full bg-gray-200 hover:bg-gray-300 transition-all'
            >
              ← Back to partners
            </button>
            
            {/* Rest of the partner details remain the same */}
            <div className='relative w-full h-[330px] mb-4'>
              <Image
                src={selectedPartner.image}
                alt={selectedPartner.name}
                fill
                className='object-cover rounded-lg'
                priority
              />
            </div>
            <h2 className='text-3xl font-serif mb-4 text-center'>{selectedPartner.name}</h2>
            <p className='text-lg mb-6 text-center'>{selectedPartner.description}</p>
            <div className='grid grid-cols-2 gap-6 max-w-lg mx-auto'>
              <div className='text-center'>
                <h4 className='font-bold mb-2'>Location</h4>
                <p>{selectedPartner.location}</p>
              </div>
              <div className='text-center'>
                <h4 className='font-bold mb-2'>Established</h4>
                <p>{selectedPartner.established}</p>
              </div>
              <div className='col-span-2 text-center'>
                <h4 className='font-bold mb-2'>Specialties</h4>
                <ul className='flex justify-center gap-4'>
                  {selectedPartner.specialties.map((specialty, index) => (
                    <li key={index}>{specialty}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='text-center text-gray-500 mt-8'></div>
        )}
      </div>
    </>
  );
};

export default Partners;