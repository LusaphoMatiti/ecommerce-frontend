// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL:
    typeof window !== "undefined" &&
    window.location.origin.includes("localhost")
      ? "http://localhost:5001" // Use local backend for development
      : "https://ecommerce-backend-2-xmb6.onrender.com", // Use Render-deployed backend
});

// Fetch all products
export const fetchAllProducts = async () => {
  try {
    const response = await api.get("/api/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/api/products/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};

// Create a new product
export const createProduct = async (formData) => {
  try {
    const response = await api.post("/api/products", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};
