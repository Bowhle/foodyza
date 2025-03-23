import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CuteCartIcon.css';

const CheckoutForm = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    city: '',
    province: 'Gauteng',
    postalCode: '',
    phone: '',
    saveInfo: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('R', '').replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    console.log('Cart items:', cartItems);
    navigate('/user-login-signup'); // Navigate to signup/login page
  };

  return (
    <div className="checkout-form-page">
      <div className="form-container">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company (optional)</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="apartment">Apartment, suite, etc. (optional)</label>
            <input type="text" id="apartment" name="apartment" value={formData.apartment} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="province">Province</label>
            <select id="province" name="province" value={formData.province} onChange={handleInputChange}>
              <option value="Gauteng">Gauteng</option>
              {/* Add more provinces as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal code</label>
            <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="saveInfo" checked={formData.saveInfo} onChange={handleInputChange} />
              Save this information for next time
            </label>
          </div>
        </form>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems && cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems && cartItems.map((item) => (
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
          </>
        )}
        <button type="submit" className="place-order-button">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default CheckoutForm;