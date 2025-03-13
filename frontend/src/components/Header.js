import React from 'react';
import './Header.css';
import foodyzaLogo from '../assets/foodyzaLogo.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={foodyzaLogo} alt="Foodyza Logo" />
      </div>
     <div className="header-buttons"> {/* Container for buttons */}
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;