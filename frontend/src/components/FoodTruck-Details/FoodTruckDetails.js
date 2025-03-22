import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './FoodTruckDetails.css';
import foodTruckData from '../FoodTruckData';
import FoodTruckImageData from './FoodTruckImageData';

function FoodTruckDetails() {
  const { id } = useParams();
  const truck = foodTruckData.find((truck) => truck.id === parseInt(id));
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };

  if (!truck || !truck.menuItems) {
    return <div>Food truck not found or menu items missing.</div>;
  }

  return (
    <div className="food-truck-details">
      <header>
        <img src={FoodTruckImageData[truck.imageUrl]} alt={truck.title} className="banner-image" />
        <div className="content-wrapper">
          <h1>{truck.title}</h1>
          <p className="cuisine">{truck.cuisineType.join(', ')}</p>
          <p className="description">{truck.description}</p>
        </div>
      </header>

      <main>
        <div className="content-wrapper">
          <h2>Menu</h2>
          <div className="menu-grid">
            {truck.menuItems.map((item) => (
              <MenuCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function MenuCard({ item, onAddToCart }) {
  return (
    <div className="menu-card">
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <button onClick={onAddToCart}>ADD TO CART</button>
    </div>
  );
}

export default FoodTruckDetails;