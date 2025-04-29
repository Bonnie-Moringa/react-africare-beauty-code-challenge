// src/pages/Cart.jsx

import React from 'react';

function Cart({ cartItems, placeOrder }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - Ksh{item.price}
              </li>
            ))}
          </ul>

          {/* ✅ Total amount */}
          <h3 style={{ marginTop: '1rem' }}>Total: Ksh{total}</h3>

          {/* ✅ Place Order button */}
          <button
            onClick={placeOrder}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
