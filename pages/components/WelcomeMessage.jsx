import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center 
                    bg-slate-100 rounded-xl shadow-2xl shadow-slate-800
                    p-6 m-32 mx-auto max-w-4xl w-[700px] h-[475px]'>
      <h1 className='text-4xl font-serif text-black mb-6 text-center '>
        William Mc Miron
      </h1>
      
      <p className=' text-black font-serif text-center leading-relaxed '>
        Welcome to <b>William McMiron</b>, where whiskey isn't just a drink—it’s a journey.
        <br className='hidden md:block' />
        Explore the world of fine whiskey with us, from rich,<br/> smoky single malts to smooth, caramel-kissed bourbons. <br/>Whether you’re a seasoned connoisseur or just beginning your journey, our carefully curated selection, expert insights, and tasting guides are here to help you savor every drop.
        <br className='hidden md:block' />
        Discover new favorites, deepen your appreciation, and join a community of whiskey lovers who know that every bottle has a story to tell.
        <br/>
        Pour a glass, settle in, and let the adventure begin.<br/> Welcome to your home for all things whiskey.
      </p>
    </div>
  );
};

export default WelcomeMessage;