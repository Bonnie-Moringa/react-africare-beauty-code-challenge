// src/components/AdminLogin.jsx

import React, { useState } from 'react';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAdmin', true);
      window.location.href = '/admin/dashboard';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <form onSubmit={handleLogin} className="mt-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block p-2 border mt-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block p-2 border mt-2 w-full"
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
