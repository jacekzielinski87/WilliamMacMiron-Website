import React from 'react';
import BackButton from './BackButton';
import NavBar from './Navbar';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

const Others = () => {
  return (
    <>
    <BackButton />
    <NavBar/>
    <NavbarLeft/>
    <NavbarRight/>
    <div className="flex items-center">
        {/* Left Sidebar */}
        <aside className="w-1/4 min-h-screen bg-[#8d8d8d] fixed left-0 top-0 pt-[90px] ">
          {/* Add your sidebar content here */}
        </aside>

        {/* Right Sidebar */}
        <aside className="w-1/4 min-h-screen bg-[#8d8d8d] fixed right-0 top-0 pt-[90px] ">
          {/* Add your sidebar content here */}
        </aside>
    </div>
    <div className='flex flex-col items-center m-8'>
      <h1 className='text-4xl font-serif text-black mb-6 text-center m-14'>
        <b>Additional Services & Information</b>
      </h1>
      
      <div className='max-w-4xl mx-auto'>
        <p className='text-xl text-black font-serif text-center mb-8'>
          Explore our additional services and offerings that complement your whiskey experience.
          From exclusive memberships to special events, we offer more than just exceptional spirits.
        </p>

        <div className='grid gap-8 md:grid-cols-2'>
          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              Membership Benefits
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Join our exclusive membership program to enjoy special perks:
              <ul className='list-disc ml-6 mt-2'>
                <li>Early access to rare whiskeys</li>
                <li>Member-only tasting events</li>
                <li>Special discounts and offers</li>
                <li>Quarterly whiskey newsletter</li>
              </ul>
            </p>
          </div>

          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              Gift Services
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Perfect for special occasions:
              <ul className='list-disc ml-6 mt-2'>
                <li>Custom gift packaging</li>
                <li>Gift cards available</li>
                <li>Corporate gifting solutions</li>
                <li>Personalized recommendations</li>
              </ul>
            </p>
          </div>

          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              Events & Tastings
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Join our regular events:
              <ul className='list-disc ml-6 mt-2'>
                <li>Weekly tasting sessions</li>
                <li>Whiskey pairing dinners</li>
                <li>Educational workshops</li>
                <li>Meet the distiller events</li>
              </ul>
            </p>
          </div>

          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              Storage & Care
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Professional services for collectors:
              <ul className='list-disc ml-6 mt-2'>
                <li>Climate-controlled storage</li>
                <li>Inventory management</li>
                <li>Collection insurance</li>
                <li>Authentication services</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Others;