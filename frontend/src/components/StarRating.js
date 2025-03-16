import React from 'react';

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'filled' : 'empty'}>
        ★
      </span>
    );
  }
  return <div className="star-rating">{stars}</div>;
}

export default StarRating;