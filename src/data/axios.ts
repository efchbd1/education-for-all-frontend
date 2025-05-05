import axios, { AxiosInstance } from "axios";
import {
  authRequestMiddleware,
  authResponseMiddleware,
} from "../auth/authMiddleware";
// import { API_BASE_URL } from "../data/services/config/api";

// Creates an Axios instance with a given base URL and applies interceptors
const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({ baseURL });

  // Attach request interceptor for authentication headers
  instance.interceptors.request.use(authRequestMiddleware, (error) => {
    return Promise.reject(error);
  });

  // Attach response interceptor for handling authentication errors
  instance.interceptors.response.use(authResponseMiddleware, (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Session expired or unauthorized");
      }
    }
    return Promise.reject(error);
  });

  return instance;
};

// Private instance for authenticated requests
const privateAxiosInstance = createAxiosInstance("https://education-for-all-backend.onrender.com/api")
// Public instance for unauthenticated requests
export const publicAxiosInstance = createAxiosInstance("const controller = `https://education-for-all-backend.onrender.com/api");

export default privateAxiosInstance;
