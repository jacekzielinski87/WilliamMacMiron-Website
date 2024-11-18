import React from 'react';

const Informations = () => {
  return (
    <div className='flex flex-col items-center m-8'>
      <h1 className='text-4xl font-serif text-black mb-6 text-center'>
        <b>Information Center</b>
      </h1>
      
      <div className='max-w-4xl mx-auto text-center'>
        <p className='text-xl text-black font-serif mb-8'>
          Welcome to our Information Center. Here you'll find everything you need to know
          about our whiskey collection, services, and expertise.
        </p>

        <div className='grid gap-8 md:grid-cols-2 mt-8'>
          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              About Our Whiskey
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Discover our carefully curated selection of premium whiskeys from around the world.
              Learn about different styles, regions, and tasting notes.
            </p>
          </div>

          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              Expert Guidance
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Our team of whiskey experts is here to help you find the perfect bottle
              and answer any questions you might have about our collection.
            </p>
          </div>

          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              Services & Events
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Join our tasting events, educational sessions, and exclusive member programs
              to enhance your whiskey journey.
            </p>
          </div>

          <div className='bg-slate-100 p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-serif text-black mb-4'>
              Contact & Support
            </h2>
            <p className='text-lg text-gray-700 font-serif'>
              Need assistance? Our customer service team is ready to help with any inquiries
              about our products and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;