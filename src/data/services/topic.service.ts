import axios from "axios";
import { getAccessToken } from "../../auth/utils";
import { API_BASE_URL } from "./config/api";
const controller = `${API_BASE_URL}/Topic`;

// Fetches a topic by its ID along with its posts
export const getTopicById = async (id: number) => {
  try {
    const { data: topic } = await axios.get(`${controller}/${id}`);
    try {
      const { data: posts } = await axios.get(`${controller}/${id}/posts`);
      return { ...topic, posts };
    } catch (postsError) {
      // Handles case where posts are not found
      if (
        axios.isAxiosError(postsError) &&
        postsError.response?.status === 404
      ) {
        return { ...topic, posts: [] }; // Returns topic with empty posts array
      }
      throw postsError;
    }
  } catch (error) {
    console.error("Error fetching topic:", error);
    throw new Error(`Failed to get Topic by ID: ${error}`);
  }
};

// Fetches all posts for a given topic ID
export const getPostsByTopicId = async (topicId: number) => {
  try {
    const { data } = await axios.get(`${controller}/${topicId}/posts`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return [];
    }
    throw new Error(`Failed to get posts for Topic ID ${topicId}: ${error}`);
  }
};

export const getAllTopics = async () => {
  try {
    const { data: topics } = await axios.get(`${controller}`);
    return topics;
  } catch (error) {
    throw new Error(`Failed to get all Topics: ${error}`);
  }
};

// Adds a new topic using form data and includes an authorization token
export const addTopic = async (topic: FormData) => {
  try {
    const token = getAccessToken();
    if (!token) {
      throw new Error("No token found");
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data", // Specifies form data content type
        Authorization: `Bearer ${token}`, // Includes authorization token in request
      },
    };

    const { data } = await axios.post(`${controller}`, topic, config);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Failed to add Topic: ${errorMessage}`);
    }
    throw new Error("An unknown error occurred");
  }
};

//Plays the posts in the topic
export const readTopicById = async (id: number) => {
  try {
    const token = getAccessToken();
    if (!token) {
      throw new Error("No token found");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(`${controller}/${id}/read`, null, config);
    return data;
  } catch (error) {
    throw new Error(`Failed to read Topic by ID: ${error}`);
  }
};
