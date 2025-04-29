import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Orders from './components/Orders';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const placeOrder = async () => {
    if (cart.length === 0) return alert("Cart is empty!");

    try {
      const res = await fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, date: new Date().toISOString() }),
      });

      if (res.ok) {
        alert("Order placed successfully!");
        setCart([]); // clear cart
      } else {
        alert("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing your order.");
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} placeOrder={placeOrder} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
