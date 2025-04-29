// src/components/AdminDashboard.jsx

import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));

    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="mt-6">
        <h2 className="text-xl">Manage Products</h2>
        <button className="bg-blue-500 text-white p-2 mt-2">Add New Product</button>
        <ul className="mt-4">
          {products.map((product) => (
            <li key={product.id} className="border-b py-2">
              <p>{product.name} - ${product.price}</p>
              <button className="bg-yellow-500 text-white p-1">Edit</button>
              <button className="bg-red-500 text-white p-1 ml-2">Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl">View Orders</h2>
        <ul className="mt-4">
          {orders.map((order) => (
            <li key={order.id} className="border-b py-2">
              <p>Order #{order.id}</p>
              <p>Status: {order.status}</p>
              <p>Client: {order.clientName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
