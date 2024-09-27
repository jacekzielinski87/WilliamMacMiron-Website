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
    <div className=' text-black'>
      <input className='bg-gray-400 border-2 rounded-2xl border-black p-2 outline-none flex justify-center items-center'
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