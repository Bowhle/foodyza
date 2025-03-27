import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './FeaturedTrucks.css';
import StarRating from './StarRating';
import kwamamzoImage from '../assets/kwamamzo.gif';
import kcgrillImage from '../assets/kcgrill.jpg';

const FeaturedTrucks = () => {
  const featuredTrucks = [
    {
      id: 1,
      name: 'Braai on Wheels',
      image: kwamamzoImage,
      cuisine: 'Kasi style kota, Chips, Fish & Chips',
      rating: 4.1,
    },
    {
      id: 2,
      name: 'Tselanes Kitchen',
      image: kcgrillImage,
      cuisine: 'African, Shisa Nyama, Vegetables',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Hangry Chef',
      image: kcgrillImage, // Replace image
      cuisine: 'African, Chips, Light Meals, Comfort Food',
      rating: 5.0,
    },
    {
      id: 4,
      name: 'Sams Waffles',
      image: kcgrillImage, // Replace image
      cuisine: 'African, Chips, Light Meals, Comfort Food',
      rating: 5.0,
    },
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
            <StarRating rating={truck.rating} />
            <Link to={`/food-truck-details/${truck.id}`} className="explore-button">
              EXPLORE
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTrucks;