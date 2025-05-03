import axios from "axios";
import { API_BASE_URL } from "./config/api";
import { handleRequest } from "utils/handleRequest";
import { CounselorType } from "domainTypes/counselor.types";
const controller = `${API_BASE_URL}/Counselor`;

export const getAllCounselors = async (): Promise<CounselorType[]> => {
  return handleRequest(axios.get(`${controller}`));
};

export const getCounselorById = async (id: number): Promise<CounselorType> => {
  return handleRequest(axios.get(`${controller}/${id}`));
};

// Adds a new counselor
export const addCounselor = async (counselor: FormData): Promise<any> => {
  try {
    const response = await axios.post(`${controller}/SignUp`, counselor);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          throw new Error(error.response.data.message);
        } else {
          throw new Error("Error: " + error.message);
        }
      } else {
        throw new Error("Network or other error: " + error.message);
      }
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
