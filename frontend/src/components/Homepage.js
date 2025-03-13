import React from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import FeaturedTrucks from './FeaturedTrucks';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <div className="main-content"> {/* Add this container */}
        <div className="search-section">
          <Hero />
          <SearchBar />
        </div>
        <div className="featured-trucks-section">
          <FeaturedTrucks />
        </div>
        {/* Will add more sections as needed */}
      </div>
    </div>
  );
}

export default Homepage;