import React from 'react';
import StarRating from './StarRating';
import './FoodTruckCard.css';

function FoodTruckCard({ truck }) {
  return (
    <div className="food-truck-card">
      <img src={truck.imageUrl} alt={truck.title} />
      <h3>{truck.title}</h3>
      <p>{truck.description}</p>
      <StarRating rating={truck.rating} />
      <button className="explore-button"> EXPLORE</button>
    </div>
  );
}

export default FoodTruckCard;