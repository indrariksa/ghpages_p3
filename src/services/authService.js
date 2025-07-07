// src/services/authService.js
import axios from "axios";

const API_URL = "https://used-patience-indrariksa-9a3aabaf.koyeb.app/login";

export const login = async (username, password) => {
  const response = await axios.post(API_URL, { username, password });
  return response.data;
};
