// src/api/axios.ts
import axios from "axios";

// Instance with the Authorization header
const axiosInstanceWithAuth = axios.create({
  baseURL: "http://localhost:5005/",
});

// Adds the Authorization Header to the requests
axiosInstanceWithAuth.interceptors.request.use((config) => {
  const token = getToken();
  console.log(token);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const getToken = () => {
  return localStorage.getItem('userToken');
};

export { axiosInstanceWithAuth };