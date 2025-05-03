import { AxiosResponse } from "axios";

// T represents the type of the data that we expect from the API request.
export const handleRequest = async <T>(
  request: Promise<AxiosResponse<T>>
): Promise<T> => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    const stackTrace = new Error().stack;
    const functionName =
      stackTrace?.split("\n")[2]?.trim().split(" ")[1] || "UnknownFunction";
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    throw new Error(`Error in ${functionName}: ${errorMessage}`);
  }
};
