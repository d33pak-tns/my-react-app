import axios from "axios";
import { API_ENDPOINTS } from "./endpoints";

const apiClient = axios.create({
  baseURL: API_ENDPOINTS.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProducts = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.PRODUCTS);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products: " + error.message);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.CATEGORIES);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch categories: " + error.message);
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await apiClient.get(
      `${API_ENDPOINTS.PRODUCTS}/category/${category}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch ${category} products: ` + error.message);
  }
};
