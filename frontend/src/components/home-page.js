import React from 'react';
import SearchBar from './SearchBar';
import FeaturedTrucks from './FeaturedTrucks';
import Footer from './Footer';

function Homepage() {
  return (
    <div>
      <SearchBar />
      <FeaturedTrucks />
      <Footer />
    </div>
  );
}

export default Homepage;