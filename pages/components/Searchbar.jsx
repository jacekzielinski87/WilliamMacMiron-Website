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
    <div className='flex justify-center items-center'>
      <input className='bg-gray-500 w-[1640px] border-2 border-black p-1 outline-none'
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