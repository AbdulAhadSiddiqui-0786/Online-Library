// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value); // Pass the updated search term to the parent
  };

  return (
    <input 
      type="text"
      placeholder="Search by title or author..."
      value={input}
      onChange={handleChange}
      className="p-2 border border-gray-300 rounded w-full mb-4"
    />
  );
};

export default SearchBar;
