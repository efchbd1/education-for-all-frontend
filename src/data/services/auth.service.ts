import { useNavigate } from "react-router-dom";
import { jwtDecode } from "../../auth/utils";
import axios from "axios";
import { PATHS } from "routes/paths";
// import { API_BASE_URL } from "./config/api";

// Controller route for authentication endpoints
// const controller = `${API_BASE_URL}/LogIn`;
const controller = `https://education-for-all-backend.onrender.com/api/LogIn`;

const navigate = useNavigate();

type SignInResponse = {
  accessToken: string;
};

//Sign in with credentials, receive access token and extract user role.
export const signin = async (
  name: string,
  password: string
): Promise<{ accessToken: string; role: string }> => {
  try {
    const response = await axios.post<{ accessToken: string }>(
      `${controller}/SignIn`,
      { name, password },
      {
        withCredentials: true,
      }
    );

    const { accessToken } = response.data;

    if (!accessToken) {
      throw new Error("⚠️ Access token is missing from the server response.");
    }

    // Decode the token and extract user role
    const decodedToken = decodeToken(accessToken);
    const extractedRole = extractRoleFromToken(decodedToken);

    return { accessToken, role: extractedRole };
  } catch (error: unknown) {
    handleError(error, "❌ תהליך ההתחברות נכשל");
    throw new Error("⚠️ Failed to sign in due to an unexpected error.");
  }
};

//Decode a JWT token into its payload.
const decodeToken = (token: string): { [key: string]: any } => {
  try {
    return jwtDecode(token) as { [key: string]: any };
  } catch (decodeError) {
    throw new Error("Invalid token received from server.");
  }
};

//Extract the user role from a decoded JWT token.
const extractRoleFromToken = (decodedToken: { [key: string]: any }): string => {
  const roleClaimKeys = [
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
    "role",
  ];

  for (const key of roleClaimKeys) {
    if (decodedToken[key]) {
      return decodedToken[key];
    }
  }

  throw new Error("Role information is missing in the token.");
};

const handleError = (error: unknown, defaultMessage: string): never => {
  if (axios.isAxiosError(error)) {
    throw new Error(
      defaultMessage + ": " + (error.response?.data?.message || "Unknown error")
    );
  }

  throw new Error(defaultMessage + ": An unexpected error occurred.");
};

//Refresh the access token using the refresh token stored in cookies.
export const refreshToken = async (): Promise<SignInResponse> => {
  try {
    const response = await axios.post<SignInResponse>(
      `https://education-for-all-backend.onrender.com/api/LogIn/Refresh`,
      null,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    const { accessToken } = response.data;
    if (!accessToken) {
      throw new Error(
        "Tokens are missing from the server response during refresh."
      );
    }

    // Update local storage with the new token
    localStorage.setItem("accessToken", accessToken);

    return { accessToken };
  } catch (error) {
    handleError(error, "Failed to refresh token");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    navigate(PATHS.LogIn);
    throw new Error("Failed to refresh token due to an unexpected error.");
  }
};

//  Send logout request to the backend using the refresh token.
export const logoutRequest = async (refreshToken: string) => {
  try {
    await axios.post(`${controller}/Logout`, refreshToken, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Logout request failed:", error);
  }
};
