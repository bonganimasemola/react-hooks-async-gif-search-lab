import React, { useState } from 'react';
// import GifList from './GifList';

export default function GifSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

   
    onSearch(searchQuery);
  };

  return (
    <div>
      <h2>Gif Search</h2>
      <form onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="Search for GIFs"
      value={searchQuery} 
      onChange={handleInputChange} 
      />
      <button type="submit">Search</button>
      </form>
    </div>
  );
}

