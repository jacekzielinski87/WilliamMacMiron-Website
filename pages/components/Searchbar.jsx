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
    <div className=' text-black flex justify-center w-[1000px]'>
      <input className='bg-[#FFFFFF] border-2 rounded-2xl border-black p-2 outline-none h-[35px] w-[600px]'
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