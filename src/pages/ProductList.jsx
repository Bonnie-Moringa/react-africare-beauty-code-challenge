// src/pages/ProductList.jsx

import React, { useEffect, useState } from 'react';
import '../styles/ProductList.css';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <div className="products-row">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Ksh,{product.price}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
