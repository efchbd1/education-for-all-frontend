import axios from "data/axios";
import { Dispatch } from "redux";
import { refreshToken } from "../data/services/auth.service";
import { logout as logoutAction } from "data/redux/auth/auth.slice";
import { DecodedTokenType } from "data/types/reactTypes/decodedToken.types";

const ACCESS_TOKEN_KEY = "accessToken";

export const setSession = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const getAccessToken = (): string | null => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY) || null;
  return token;
};

export const removeSession = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  axios.defaults.headers.common.Authorization = undefined;
};

export  const  logout = () => async (dispatch: Dispatch) => {
  dispatch(logoutAction());
  removeSession();
};

export function jwtDecode(token: string): DecodedTokenType {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );
  return JSON.parse(jsonPayload);
}

export const isValidToken = (token: string) => {
  if (!token) {
    return false;
  }

  try {
    const decoded = jwtDecode(token);

    if (!decoded.exp) {
      return false;
    }

    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};


export const refreshAccessToken = async (): Promise<string> => {
  try {
    const { accessToken } = await refreshToken(); 

    setSession(accessToken);
    return accessToken;
  } catch (error) {
    logout();
    throw new Error("Failed to refresh token.");
  }
};

let refreshPromise: Promise<string> | null = null;

axios.interceptors.request.use(async (config) => {
  let accessToken = getAccessToken();

  if (!accessToken) {
    return config; 
  }

  if (!isValidToken(accessToken)) {

    if (!refreshPromise) {
      refreshPromise = refreshAccessToken()
        .then((newToken) => {
          refreshPromise = null;
          return newToken;
        })
        .catch((error) => {
          refreshPromise = null;
          return Promise.reject("Session expired. Please log in again.");
        });
    } 

    try {
      accessToken = await refreshPromise;
    } catch (error) {
      return Promise.reject("Session expired. Please log in again.");
    }
  }

  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

