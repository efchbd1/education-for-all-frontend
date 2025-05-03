import { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { getAccessToken, isValidToken, removeSession } from "../auth/utils";

// Permission check before server request
export const authRequestMiddleware = (request: InternalAxiosRequestConfig) => {
  if (request.url === "/Login") {
    return request;
  }
  const token = getAccessToken();
  if (!token || !isValidToken(token)) {
    removeSession();
  }
  return request;
};

export const authResponseMiddleware = (response: AxiosResponse) => {
  if (response.status === 401) {
    removeSession();
    Promise.reject("Unauthorized");
  }
  return response;
};
