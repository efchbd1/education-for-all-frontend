import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostType } from "data/types/domainTypes/post.types";

type PostStateType = {
  posts: PostType[];
};

const initialState: PostStateType = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType>) => {
      state.posts.push(action.payload);
    },
    updatePost: (
      state,
      action: PayloadAction<{ id: number; updatedPost: PostType }>
    ) => {
      const { id, updatedPost } = action.payload;
      const index = state.posts.findIndex((post) => post.id === id);
      if (index !== -1) {
        state.posts[index] = { ...state.posts[index], ...updatedPost };
      }
    },
    removePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    setPosts: (state, action: PayloadAction<PostType[]>) => {
      state.posts = [...action.payload];
    },
  },
});

export const { addPost, updatePost, removePost, setPosts } = postSlice.actions;
export default postSlice.reducer;
