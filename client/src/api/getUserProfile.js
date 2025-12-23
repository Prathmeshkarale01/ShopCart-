import axios from "axios";

const backendURL =
  import.meta.env.VITE_BACKEND_URL || 'https://shopcart-xsqh.onrender.com';

// Helper: always get latest token
const authHeader = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

/* ======================
   USER PROFILE
====================== */

const getUserProfile = async () => {
  try {
    const response = await axios.get(
      `${backendURL}/api/user/profile`,
      { headers: authHeader() }
    );
    return response;
  } catch (error) {
    console.error(
      "Error fetching user profile:",
      error.response?.data || error.message
    );
    throw error;
  }
};

/* ======================
   ADMIN – GET ALL USERS
====================== */

const getAllUsers = async () => {
  try {
    const response = await axios.get(
      `${backendURL}/api/user/get-all-users`,
      { headers: authHeader() }
    );
    return response;
  } catch (error) {
    console.error(
      "Error fetching all users:",
      error.response?.data || error.message
    );
    throw error;
  }
};

/* ======================
   UPDATE USER PROFILE
====================== */

const updateUser = async (userData) => {
  try {
    const response = await axios.put(
      `${backendURL}/api/user/update-profile`,
      userData,
      {
        headers: {
          ...authHeader(),
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(
      "Error updating user profile:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export {
  getUserProfile,
  getAllUsers,
  updateUser,
};
