// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Africare Beauty</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/products" className="nav-link">Products</Link></li>
        <li><Link to="/cart" className="nav-link">Cart</Link></li>
        <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
