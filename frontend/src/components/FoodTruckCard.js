import React from 'react';
import StarRating from './StarRating';
import './FoodTruckCard.css';
import { Link } from 'react-router-dom';

function FoodTruckCard({ truck }) {
  return (
    <div className="food-truck-card">
      <img src={truck.imageUrl} alt={truck.title} />
      <h3>{truck.title}</h3>
      <p>{truck.description}</p>
      <StarRating rating={truck.rating} />
      <Link to={`/food-truck-details/${truck.id}`}>
      <button className="explore-button"> EXPLORE</button>
      </Link>
    </div>
  );
}

export default FoodTruckCard;