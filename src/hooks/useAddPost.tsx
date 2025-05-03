import { Dispatch } from "@reduxjs/toolkit";
import { addPost } from "data/services/post.service";
import { updateTopic } from "data/redux/topic/topic.slice";
import { addPost as addPostToRedux } from "data/redux/post/post.slice";

export const useAddPost = (
  newPostContent: string,
  setNewPostContent: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  topic: any,
  setTopic: React.Dispatch<React.SetStateAction<any>>,
  currentUserId: number,
  dispatch: Dispatch,
  isCounselor: boolean,
  handleCloseDialog: () => void
) => {

  const validatePostContent = (value: string) => {
    const words = value.trim().split(/\s+/);
    const wordCount = words.length;

    // Check if content contains at least two letters
    if (!/[a-zA-Zא-ת].*[a-zA-Zא-ת]/.test(value)) {
      return "תוכן התגובה חייב לכלול גם אותיות.";
    }

    if (wordCount < 2) {
      return "תוכן התגובה חייב לכלול לפחות 2 מילים.";
    }
    for (const word of words) {
      if (!/^\d+$/.test(word)) {
        if (word.length < 2) {
          return "כל מילה בתגובה חייבת להיות לפחות בת 2 אותיות (למעט מספרים).";
        }
        if (word.length > 12) {
          return "אף מילה בתגובה לא יכולה להיות ארוכה מ-12 אותיות.";
        }
      }
    }
    return "";
  };

  const handleAddPost = async () => {
    const validationError = validatePostContent(newPostContent);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      // Create new post object
      const newPost: any = {
        content: newPostContent,
        topicId: parseInt(topic.id),
        userId: currentUserId,
        counselorId: null,
        id: 0,
        date: new Date(),
        likes: 0,
        isReported: false,
        isDeleted: false,
      };

      // Assign counselorId if user is a counselor
      if (isCounselor) {
        newPost.counselorId = newPost.userId;
        newPost.userId = null;
      }

      // Call API to add the post
      const response = await addPost(newPost);

      // Update topic with new post
      const updatedTopic = {
        ...topic,
        posts: [...(topic.posts || []), response],
        dateLastActive: new Date().toISOString(),
      };

      // Dispatch updated topic and post to Redux
      dispatch(updateTopic(updatedTopic));
      dispatch(addPostToRedux(response));

      // Update local state and close the dialog
      setTopic(updatedTopic);
      setNewPostContent("");
      setError("");
      handleCloseDialog();
      window.location.reload();

    } catch (error) {
      setError("Failed to add post, please try again");
    }
  };

  return { handleAddPost };
};