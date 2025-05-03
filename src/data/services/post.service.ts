import { PostType } from "data/types/domainTypes/post.types";
import axios from "data/axios";
import { handleRequest } from "utils/handleRequest";
import { API_BASE_URL } from "./config/api";
import { getAccessToken } from "../../auth/utils";

const controller = `${API_BASE_URL}/Post`;

export const getAllPosts = async (): Promise<PostType[]> => {
  return handleRequest(axios.get<PostType[]>(controller));
};

export const getPostById = async (id: number): Promise<PostType> => {
  return handleRequest(axios.get<PostType>(`${controller}/${id}`));
};

// Fetches a post by its token (used for deleting posts by the manager site)
export const getPostByToken = async (token: string): Promise<PostType> => {
  return handleRequest(
    axios.get<PostType>(`${API_BASE_URL}/posts/delete-post/${token}`)
  );
};

// Deletes a post using its token
export const deletePost = async (token: string): Promise<void> => {
  try {
    await axios.delete(`${controller}/delete-post/${token}`);
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to delete post"
    );
  }
};

export const addPost = async (post: PostType): Promise<PostType> => {
  const token = getAccessToken(); 
  if (!token) {
    throw new Error("User is not authenticated");
  }

  return handleRequest(
    axios.post<PostType>(controller, post, {
      headers: { Authorization: `Bearer ${token}` }, 
    })
  );
};

export const updatePost = async (post: PostType): Promise<PostType> => {
  const { id, ...postData } = post;
  return handleRequest(axios.put<PostType>(`${controller}/${id}`, postData));
};

export const likePost = async (postId: number): Promise<number> => {
  return handleRequest(axios.post<number>(`${controller}/like/${postId}`));
};

// Reports a post by sending a report email
export const reportPost = async (
  postId: number,
  reportData: { reportReason: string }
): Promise<void> => {
  const token = getAccessToken(); 

  if (!token) {
    throw new Error("User is not authenticated");
  }

  await handleRequest(
    axios.post(`${controller}/send-report-email/${postId}`, reportData, {
      headers: { Authorization: `Bearer ${token}` }, 
    })
  );
};