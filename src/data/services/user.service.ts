import axios from "axios";
import { UserType } from "./../types/domainTypes/user.types";
import { API_BASE_URL } from "./config/api";
const controller = `${API_BASE_URL}/api/User`;

export const getUserById = async (id: number): Promise<UserType> => {
  try {
    const response = await axios.get<UserType>(`${controller}/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch user by ID: ${error.message}`);
    }
    throw new Error("An unknown error occurred while fetching user by ID.");
  }
};

// Adds a new user
export const addUser = async (user: FormData): Promise<any> => {
  try {
    const response = await axios.post(`https://education-for-all-backend.onrender.com/api/User/SignUp`, user);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          throw new Error(error.response.data.message);
        } else {
          throw new Error("Failed to add user: " + error.message);
        }
      } else {
        throw new Error("Network or other error: " + error.message);
      }
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
