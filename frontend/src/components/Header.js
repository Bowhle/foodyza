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
      <button className="BurgerIcon" onClick={toggleDropdown} aria-label="Main navigation menu">
        Burger
      </button>
      <div className="logo">
        <Link to="http://localhost:3000/"> {/* Wrap logo in Link */}
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