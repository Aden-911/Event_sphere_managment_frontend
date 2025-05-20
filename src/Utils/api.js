// utils/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // adjust if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: add JWT token automatically if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
