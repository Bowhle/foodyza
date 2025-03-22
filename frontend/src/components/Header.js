import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import foodyzaLogo from '../assets/foodyzaLogo.svg';
import { ShoppingCart } from 'lucide-react';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const fetchCartItems = async (): Promise<{ id: number; title: string; price: string; quantity: number; image: string }[]> => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      return JSON.parse(storedCart);
    }
    return [];
  };

  useEffect(() => {
    const updateCart = async () => {
      const cartItems = await fetchCartItems();
      setCartItemCount(cartItems.reduce((total, item) => total + item.quantity, 0));
    };
    updateCart();
  }, []);

  return (
    <header className="header">
      <button
        className="BurgerIcon"
        onClick={toggleDropdown}
        aria-label="Main navigation menu"
        aria-expanded={isDropdownOpen}
        aria-controls="header-nav"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 5H17.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 10H17.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 15H17.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="logo">
        <Link to="/">
          <img src={foodyzaLogo} alt="Foodyza Logo" />
        </Link>
      </div>
      <nav className={`header-nav ${isDropdownOpen ? 'show' : ''}`}>
        <Link to="/foodtrucks" className="nav-link">
          FOODTRUCKS
        </Link>
        <Link to="/cuisine" className="nav-link">
          CUISINE
        </Link>
      </nav>
      <div className="header-buttons">
        <Link to="/cart" className="cart-link"> {/* Corrected to /cart */}
          <ShoppingCart className="cart-icon" />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
        <a href="/user-login-signup">
          <button className="login-button">Login</button>
        </a>
        <a href="/user-login-signup">
          <button className="signup-button">Sign Up</button>
        </a>
      </div>
    </header>
  );
}

export default Header;