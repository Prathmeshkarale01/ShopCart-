import axios from "axios";

// Backend base URL
const backendURL =
  import.meta.env.VITE_BACKEND_URL || 'https://shopcart-4149.onrender.com';

console.log("Backend URL:", backendURL);

/* ============================
   PRODUCTS
============================ */

// 🔓 Public API – get all products
const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `${backendURL}/api/product/get-all-products`
    );
    return response;
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// 🔓 Public API – get product by ID
const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(
      `${backendURL}/api/product/detail?id=${productId}`
    );
    return response;
  } catch (error) {
    console.error(
      "Error fetching product by ID:",
      error.response?.data || error.message
    );
    throw error;
  }
};

/* ============================
   CART (Protected APIs)
============================ */

// Helper to get auth header safely
const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// ➕ Add to cart
const addToCart = async (productId, quantity = 1) => {
  try {
    const response = await axios.post(
      `${backendURL}/api/cart/add`,
      { productId, quantity },
      { headers: authHeader() }
    );
    return response;
  } catch (error) {
    console.error(
      "Error adding product to cart:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// 🛒 Get cart items
const getCartItems = async () => {
  try {
    const response = await axios.get(
      `${backendURL}/api/cart`,
      { headers: authHeader() }
    );
    return response;
  } catch (error) {
    console.error(
      "Error fetching cart items:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// ❌ Remove from cart
const removeFromCart = async (productId) => {
  try {
    const response = await axios.post(
      `${backendURL}/api/cart/remove`,
      { productId },
      { headers: authHeader() }
    );
    return response;
  } catch (error) {
    console.error(
      "Error removing product from cart:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export {
  fetchProducts,
  fetchProductById,
  addToCart,
  getCartItems,
  removeFromCart,
};
