import React from 'react';
import './FeaturedSection.css';

function FeaturedSection({ title }) {
  return (
    <div className="featured-section">
      <h2>{title}</h2>
      {/* Display featured items here (e.g., restaurants) */}
    </div>
  );
}

export default FeaturedSection;
