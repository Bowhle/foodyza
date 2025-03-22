import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'; // Create a Cart.css file for styling

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('R', '').replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            Total: R{calculateTotal()}
          </div>
          <Link to="/checkout" className="checkout-button">
            GO TO CHECKOUT
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;