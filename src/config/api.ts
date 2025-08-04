// API Configuration
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV ? "/api" : "https://institute.dev.payaza.africa");

export const API_ENDPOINTS = {
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGIN: `${API_BASE_URL}/auth/login`,
};

export const API_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
