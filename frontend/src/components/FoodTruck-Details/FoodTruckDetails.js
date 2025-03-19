import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './FoodTruckDetails.css';
import foodTruckData from '../FoodTruckData';

function FoodTruckDetails() {
  const { id } = useParams();
  console.log("Params ID:", id);

  const truck = foodTruckData.find((truck) => truck.id === parseInt(id));
  console.log("Found Truck:", truck)

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [reviewerName, setReviewerName] = useState('');

  const handleAddToFavorites = () => {
    alert('Added to Favorites!');
    // Implement logic to save to user's favorites list
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    const newReview = {
      rating: rating,
      reviewText: reviewText,
      reviewerName: reviewerName,
    };

    setReviews([...reviews, newReview]);
    setRating(5);
    setReviewText('');
    setReviewerName('');
  };

  if (!truck) {
    return <div>Food truck not found.</div>;
  }

  return (
    <div>
      <header>
        <h1>{truck.title}</h1>
        <p className="cuisine">{truck.cuisineType.join(', ')}</p>
        <p className="description">{truck.description}</p>
      </header>

      <main>
        <div className="left-column">
          <h2>Menu</h2>
          <div className="menu-item">
            <h3>Food item - price</h3>
            <img src={truck.imageUrl} alt="food name" />
          </div>
          {/* Add more menu items */}
        </div>

        <div className="right-column">
          <h2>Location</h2>
          <div id="map">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?q=${truck.title}, Randburg, Gauteng, South Africa&key=APIAIzaSyDFmaOiu9tvsrI2juyCyvbWwx4FYzuEwyw`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title={`Location of ${truck.title} in Randburg`}
            ></iframe>
          </div>

          <h2>Contact</h2>
          <p>Phone: foodtruck number</p>
          <p>Email: foodtruck email</p>

          <h2>Reviews</h2>
          <div id="reviews-list">
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <p className="rating">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </p>
                <p className="review-text">
                  "{review.reviewText}" - {review.reviewerName}
                </p>
              </div>
            ))}
          </div>

          <h2>Add Your Review</h2>
          <form id="review-form" onSubmit={handleReviewSubmit}>
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              name="rating"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              required
            >
              <option value="5">★★★★★</option>
              <option value="4">★★★★☆</option>
              <option value="3">★★★☆☆</option>
              <option value="2">★★☆☆☆</option>
              <option value="1">★☆☆☆☆</option>
            </select>

            <label htmlFor="review-text">Review:</label>
            <textarea
              id="review-text"
              name="review-text"
              rows="4"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            ></textarea>

            <label htmlFor="reviewer-name">Your Name:</label>
            <input
              type="text"
              id="reviewer-name"
              name="reviewer-name"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              required
            />

            <button type="submit">Submit Review</button>
          </form>
        </div>
      </main>

      <footer>
        <button id="favorite-btn" onClick={handleAddToFavorites}>
          ❤️ Add to Favorites
        </button>
        <div className="social-media">
          <a href="https://www.instagram.com/your_instagram_profile">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/your_facebook_profile">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/your_twitter_profile">
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default FoodTruckDetails;