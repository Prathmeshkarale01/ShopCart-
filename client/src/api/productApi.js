// productApi.js
import axios from 'axios';

const api = axios.create({
  baseURL:import.meta.env.VITE_BACKEND_URL || 'https://shopcart-4149.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});


// Alternative productApi.js with RESTful endpoints
export const createProduct = async (productData) => {
  try {
    const response = await api.post('/product', productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/product/${id}`); // Path parameter
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await api.put(`/product/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/product/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};