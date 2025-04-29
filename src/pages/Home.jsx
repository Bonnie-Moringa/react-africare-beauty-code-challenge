import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import './Home.css'; // New CSS file for homepage
import beautyBanner from '../assets/beauty-banner.jpg'; // Replace with your actual image path


function Home() {
  return (
    <div className="home-container">
      <header className="contact-header">
        <p>Contact us: +254 712 345 678 | Email: support@africarebeauty.com</p>
      </header>

      <div className="welcome-section">
        <img src={beautyBanner} alt="Beauty Products" className="banner-image" />
        <div className="welcome-text">
          <h1>Welcome to Africare Beauty</h1>
          <p>Discover natural, elegant, and nourishing beauty products for your radiant self.</p>
          <Link to="/products" className="shop-now-button">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;