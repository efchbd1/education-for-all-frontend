import { RootState } from "data/redux/store";

export const selectAuth = (state: RootState) => state.auth;

export const selectUserName = (state: RootState) => state.auth.user?.name ?? "";

export const selectUserId = (state: RootState) => state.auth.user?.id ?? null;

// Select the authentication status from the auth state (whether the user is a guest or logged in)
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

// Check if the user is a counselor
export const isProfessional = (state: RootState) => {
  return !!state.auth.user && "bio" in state.auth.user;
};
