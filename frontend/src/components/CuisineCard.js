import React from 'react';
import { Link } from 'react-router-dom';
import './CuisineCard.css';
import StarRating from './StarRating';

const CuisineCard = ({ cuisine }) => {
  return (
    <div className="cuisine-card">
      <img src={cuisine.imageSrc} alt={cuisine.name} />
      <h3>{cuisine.name}</h3>
      <p>Rating: {cuisine.rating}</p>
      <StarRating rating={cuisine.rating} />
      <Link to={`/foodtrucks?cuisine=${cuisine.name}`}>
        <button className="explore-button">EXPLORE TRUCKS</button>
      </Link>
    </div>
  );
};

export default CuisineCard;