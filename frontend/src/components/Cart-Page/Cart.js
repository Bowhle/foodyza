import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('R', '')) || 0;
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
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
                  <span>{item.title}</span>
                  <span>Quantity: {item.quantity}</span>
                  <span>Price: {item.price}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            Total: R{calculateTotal()}
          </div>
          <button className="clear-cart-button" onClick={clearCart}>
            CLEAR CART
          </button>
        </>
      )}
      <Link to="/checkout-form" className="checkout-button">
        GO TO CHECKOUT
      </Link>
    </div>
  );
};

export default Cart;