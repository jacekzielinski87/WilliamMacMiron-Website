import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center 
                    bg-slate-100 rounded-xl shadow-lg shadow-slate-700
                    p-8 mx-auto my-8 max-w-4xl'>
      <h1 className='text-5xl font-serif text-black mb-6 text-center'>
        William Mc Miron
      </h1>
      
      <p className='text-xl text-black font-serif text-center leading-relaxed '>
      Welcome to William McMiron, where whiskey isn't just a drink—it’s a journey.
        <br className='hidden md:block' />
        Explore the world of fine whiskey with us, from rich, smoky single malts to smooth, caramel-kissed bourbons. <br/>Whether you’re a seasoned connoisseur or just beginning your journey, our carefully curated selection, expert insights, and tasting guides are here to help you savor every drop.
        <br className='hidden md:block' />
        Discover new favorites, deepen your appreciation, and join a community of whiskey lovers who know that every bottle has a story to tell.
        <br/>
        Pour a glass, settle in, and let the adventure begin. Welcome to your home for all things whiskey.
      </p>
    </div>
  );
};

export default WelcomeMessage;