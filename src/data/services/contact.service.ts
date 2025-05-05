import axios from "axios";
import { ContactCounselorRequestType } from "data/types/reactTypes/contact/contactCounselorRequest.types";
import { ContactRequestType } from "data/types/reactTypes/contact/contactRequest.types";
// import { API_BASE_URL } from "./config/api";
import { handleRequest } from "../../utils/handleRequest";
import { getAccessToken } from "../../auth/utils";

// const controller = `${API_BASE_URL}/Contact`;
const controller = `https://education-for-all-backend.onrender.com/api/Contact`;

export const contactCounselor = async (
  request: ContactCounselorRequestType
): Promise<void> => {
  const token = getAccessToken();
  if (!token) {
    throw new Error("No authentication token found");
  }

  await handleRequest(
    axios.post<void>(`${controller}/counselor`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );
};

//Contact the site manager
export const contactGeneral = async (
  request: ContactRequestType
): Promise<void> => {
  const token = getAccessToken();

  if (!token) {
    throw new Error("User is not authenticated");
  }

  await handleRequest(
    axios.post<void>(`${controller}/general`, request, {
      headers: { Authorization: `Bearer ${token}` },
    })
  );
};
