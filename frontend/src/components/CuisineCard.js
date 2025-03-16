import React from 'react';
import './CuisineCard.css';

const CuisineCard = ({ cuisine }) => {
  return (
    <div className="cuisine-card">
      <img src={cuisine.imageSrc} alt={cuisine.name} />
      <h3>{cuisine.name}</h3>
      <p>Rating: {cuisine.rating}</p>
    </div>
  );
};

export default CuisineCard;