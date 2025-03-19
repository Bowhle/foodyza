import React from 'react';
import './StarRating.css';

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'star filled' : 'star'}>
        ★
      </span>
    );
  }
  return <div className="StarRating">{stars}</div>;
}

export default StarRating;