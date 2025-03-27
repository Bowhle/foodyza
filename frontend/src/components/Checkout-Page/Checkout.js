import React, { useState, useEffect } from 'react';
import './Checkout.css'; // Create Checkout.css for styling

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('R', '').replace('R', '')) * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="checkout-items">
            {cartItems.map((item) => (
              <li key={item.id} className="checkout-item">
                <img src={item.image} alt={item.title} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout-total">
            Total: R{calculateTotal()}
          </div>
          <button className="place-order-button">PLACE ORDER</button>
        </>
      )}
    </div>
  );
};

export default Checkout;