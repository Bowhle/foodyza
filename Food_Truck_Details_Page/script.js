// Add to Favorites functionality
document.getElementById('favorite-btn').addEventListener('click', function() {
  alert('Added to Favorites!');
  // Add logic to save to user's favorites list (e.g., using localStorage or API call)
});

// Review submission functionality
document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const rating = document.getElementById('rating').value;
  const reviewText = document.getElementById('review-text').value;
  const reviewerName = document.getElementById('reviewer-name').value;

  // Create a new review element
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');
  reviewElement.innerHTML = `
    <p class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</p>
    <p class="review-text">"${reviewText}" - ${reviewerName}</p>
  `;

  // Add the new review to the reviews list
  document.getElementById('reviews-list').appendChild(reviewElement);

  // Clear the form
  document.getElementById('review-form').reset();
});
