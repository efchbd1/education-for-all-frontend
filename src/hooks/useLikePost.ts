import { Dispatch } from "@reduxjs/toolkit";
import { updateTopic } from "data/redux/topic/topic.slice";
import { likePost } from "data/services/post.service";
import { PostType } from "domainTypes/post.types";

// Custom hook for handling post like functionality
export const useLikePost = (
  topic: any,
  setTopic: React.Dispatch<React.SetStateAction<any>>,
  dispatch: Dispatch,
  setLikedPosts: React.Dispatch<
    React.SetStateAction<{
      [key: number]: { liked: boolean; disliked: boolean };
    }>
  >
) => {
  const handleLikePost = async (postId: number) => {
    try {
      // Call service to like the post
      const updatedPost = await likePost(postId);
      const updatedTopic = { ...topic };
      // Update the post's like count
      const updatedPosts = updatedTopic.posts.map((post: PostType) =>
        post.id === postId ? { ...post, likes: updatedPost } : post
      );
      updatedTopic.posts = updatedPosts;
      setTopic(updatedTopic);
      dispatch(updateTopic(updatedTopic));
      setLikedPosts((prevLikedPosts) => ({
        ...prevLikedPosts,
        [postId]: { liked: true, disliked: false },
      }));
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return { handleLikePost };
};
