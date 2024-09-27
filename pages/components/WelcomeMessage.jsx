import React from 'react'

const WelcomeMessage = () => {
  return (
    <div className='grid text-black font-serif h-[150px] w-2/3 ml-80 bg-slate-100'>
       <h1 className='rounded-xl flex justify-center py-2 m-2 text-2xl'>Welcome to Whiskey Haven</h1>
      <p className=' flex justify-center text-xl'>
        Discover the finest selection of premium whiskeys from around the world.<br/> Whether you're a seasoned connoisseur or just starting your whiskey journey, we have something for everyone.<br/> Pour a glass, relax, and explore the flavors of timeless craftsmanship.
      </p> 
    </div>
  )
}

export default WelcomeMessage