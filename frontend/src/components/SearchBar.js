import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for food trucks..." />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
