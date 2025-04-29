import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000'
});

// AUTH
export const signupUser = (userData) => API.post('/users', userData);
export const loginUser = async ({ email, password }) => {
  const res = await API.get(`/users?email=${email}&password=${password}`);
  return res.data[0]; // user or undefined
};

// PRODUCTS
export const getProducts = () => API.get('/products');

// ORDERS
export const placeOrder = (orderData) => API.post('/orders', orderData);
