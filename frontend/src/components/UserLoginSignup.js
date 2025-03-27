import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLoginSignup.css';

function UserLoginSignup() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleContinueSignIn = () => {
    // Simulate successful order placement
    alert('Order placed and delivered successfully!');
    navigate('/'); // Redirects to home page or any other relevant page.
  };

  return (
    <div>
      <div className="login-signup-container">
        <h2>A Big Title</h2>
        <input
          type="text"
          placeholder="Enter email or phone number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="continue-button" onClick={handleContinueSignIn}>
          Continue sign in to Pace Order
        </button>
        <button className="signup-button">Sign up now</button>
        <div className="or-text">OR</div>
        <button className="google-button">Sign in with Google</button>
        <button className="facebook-button">Sign in with Facebook</button>
        <button className="manual-button">Enter details manually</button>
      </div>
    </div>
  );
}

export default UserLoginSignup;