// api.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// create
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// search api endpoint
export const searchUsers = async (text) => {
  try {
    const response = await axiosInstance.get(`/search/users?q=${text}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// getUser
export const getUser = async (username) => {
  try {
    const response = await axiosInstance.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getUserRepos = async (username) => {
  try {
    const response = await axiosInstance.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user repos:", error);
    throw error;
  }
};