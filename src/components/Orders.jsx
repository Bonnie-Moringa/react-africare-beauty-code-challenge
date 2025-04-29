// src/components/Orders.jsx

import React, { useEffect, useState } from 'react';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      fetch(`http://localhost:5000/orders?userId=${userId}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul className="mt-4">
          {orders.map((order) => (
            <li key={order.id} className="border-b py-2">
              <h3>Order #{order.id}</h3>
              <p>Products: {order.products.join(', ')}</p>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
