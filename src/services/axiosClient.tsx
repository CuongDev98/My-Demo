// axiosClient.ts
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.example.com",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Tự động thêm token nếu có
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
