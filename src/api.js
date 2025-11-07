import axios from "axios";

const API = "http://localhost:4000/api"; // adjust to your backend port

export const getProducts = async () => {
  const res = await axios.get(`${API}/products`);
  return res.data;
};

export const getCart = async () => {
  const res = await axios.get(`${API}/cart`);
  return res.data;
};

export const addToCart = async (productId, qty) => {
  const res = await axios.post(`${API}/cart`, { productId, qty });
  return res.data;
};

export const removeFromCart = async (id) => {
  const res = await axios.delete(`${API}/cart/${id}`);
  return res.data;
};

export const checkout = async () => {
  const res = await axios.post(`${API}/cart/checkout`);
  return res.data;
};
