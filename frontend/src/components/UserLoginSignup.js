import React from 'react';
import './UserLoginSignup.css';

function UserLoginSignup() {
  return (
    <div>
      <div className="login-signup-container">
        <h2>A Big Title</h2>
        <input type="text" placeholder="Enter email or phone number" />
        <button className="continue-button">Continue to sign in</button>
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