import React from 'react';
import './CuisineCard.css';
import StarRating from './StarRating';

const CuisineCard = ({ cuisine }) => {
  return (
    <div className="cuisine-card">
      <img src={cuisine.imageSrc} alt={cuisine.name} />
      <h3>{cuisine.name}</h3>
      <p>Rating: {cuisine.rating}</p>
      <StarRating rating={cuisine.rating} />
      <button
      className="explore-button">
      EXPLORE TRUCKS
      </button>
    </div>
  );
};

export default CuisineCard;