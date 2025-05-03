import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "data/types/domainTypes/user.types";
import { removeSession } from "../../../auth/utils";
import { CounselorType } from "data/types/domainTypes/counselor.types";
import { AuthType } from "data/types/reactTypes/auth.types";

const initialState: AuthType = {
  user: null,
  isAuthenticated: false,
  isInitialized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authenticated user
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    // Action to set the counselor as the authenticated user
    setCounselor: (state, action: PayloadAction<CounselorType>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    // Action to mark the initialization as complete
    setInitialized: (state) => {
      state.isInitialized = true;
    },

    // Action to log out the user and clear the session
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isInitialized = false;
      removeSession(); // Remove session data from local storage
    },
  },
});

export const { setUser, setCounselor, setInitialized, logout } =
  authSlice.actions;
export default authSlice.reducer;
