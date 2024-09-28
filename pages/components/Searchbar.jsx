import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className=' text-black flex justify-center items-center'>
      <input className='bg-[#FFFFFF] border-2 rounded-2xl border-black p-2 outline-none w-[1200px] h-[25px]'
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder=""
      />
      <button onClick={handleSearch} ></button>
    </div>
  );
}

export default SearchBar;