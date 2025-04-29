// src/pages/Signup.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({
    firstName: '',
    secondName: '',
    phone: '',
    email: '',
    location: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Save user to db.json via POST request
    await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    navigate('/login');
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Sign Up</h2>
      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="secondName" value={form.secondName} onChange={handleChange} placeholder="Second Name" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Delivery Location" required />
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Create Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
