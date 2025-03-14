import React from 'react';
import './FeaturedTrucks.css';
import kwamamzoImage from '../assets/kwamamzo.gif';
import kcgrillImage from '../assets/kcgrill.jpg';

const FeaturedTrucks = () => {
  const featuredTrucks = [
    {
      id: 1,
      name: 'KwaMamzo',
      image: kwamamzoImage, // Replace image
      cuisine: 'Kasi style kota',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'KCs Grill',
      image: kcgrillImage, // Replace image
      cuisine: 'pap&steak',
      rating: 4.8,
    },
    // Will add more trucks as needed
  ];

  return (
    <div className="featured-trucks-section">
      <h2>Featured Food Trucks</h2>
      <div className="trucks-grid">
        {featuredTrucks.map((truck) => (
          <div key={truck.id} className="truck-card">
            <img src={truck.image} alt={truck.name} />
            <h3>{truck.name}</h3>
            <p>Cuisine: {truck.cuisine}</p>
            <p>Rating: {truck.rating}</p>
            <button className="explore-button">
            EXPLORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTrucks;