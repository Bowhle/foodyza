import React from 'react';
import './FeaturedTrucks.css';

const FeaturedTrucks = () => {
  const featuredTrucks = [
    {
      id: 1,
      name: 'KwaMamzo',
      image: '/assets/kwamamzo.jpg', // Replace with your image
      cuisine: 'Kasi style kota',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'KCs Grill',
      image: '/assets/kc-grill.jpg', // Replace with your image
      cuisine: 'pap&steak',
      rating: 4.8,
    },
    // Add more trucks as needed
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTrucks;