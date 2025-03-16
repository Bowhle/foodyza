import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';
import foodyzaLogo from '../assets/foodyzaLogo.svg';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
    console.log("toggle clicked");
  };

  return (
    <header className="header">
       <button
        className="BurgerIcon"
        onClick={toggleDropdown}
        aria-label="Main navigation menu"
        aria-expanded={isDropdownOpen}
        aria-controls="header-nav"
      >
        {/* SVG Hamburger Icon */}
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
        <Link to="/"> {/* Wrap logo in Link */}
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
        <Link to="/area" className="nav-link">
          AREA
        </Link>
      </nav>
      <div className="header-buttons">
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