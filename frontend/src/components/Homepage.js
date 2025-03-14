import React from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import FeaturedTrucks from './FeaturedTrucks';
import Footer from './Footer';
import './Homepage.css';

 function Homepage() {
  return (
    <div className="homepage">
      <div className="main-content">
        <div className="search-section">
          <Hero />
          <SearchBar />
        </div>
        <div className="featured-trucks-section">
          <FeaturedTrucks />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;