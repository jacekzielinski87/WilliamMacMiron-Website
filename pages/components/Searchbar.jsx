import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='flex justify-center items-center w-full'>
      <input 
        className='bg-[#FFFFFF] border-2 rounded-2xl border-black p-2 outline-none 
                  h-[30px] w-[500px] fixed top-7 left-[952px] transform -translate-x-1/2 z-10'
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;