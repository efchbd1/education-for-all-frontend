import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "data/types/domainTypes/user.types";
import { getUserById } from "data/services/user.service";
import { selectUsers } from "./user.selector";
import { RootState } from "data/redux/store";

type UserStateType = {
  users: UserType[];
};

const initialState: UserStateType = {
  users: [],
};

export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (id: number, { getState }) => {
    const state = getState() as RootState;
    const users = selectUsers(state);
    if (Array.isArray(users)) {
      const existingUser = users.find((user: UserType) => user.id === id);
      if (existingUser) {
        return existingUser;
      }
    }

    return await getUserById(id);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      if (action.payload.id !== undefined && !state.users[action.payload.id]) {
        state.users[action.payload.id] = action.payload;
      }
    },
    updateUser: (
      state,
      action: PayloadAction<{ id: number; updatedUser: UserType }>
    ) => {
      const { id, updatedUser } = action.payload;
      state.users[id] = updatedUser;
    },
    removeUser: (state, action: PayloadAction<number>) => {
      delete state.users[action.payload];
    },
    setUsers: (state, action: PayloadAction<UserType[]>) => {
      action.payload.forEach((user) => {
        if (user.id !== undefined) {
          state.users[user.id] = user;
        }
      });
    },
  },
  extraReducers: (builder) => {
    // Handle the fulfilled state of the fetchUserById async thunk
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      if (action.payload.id !== undefined) {
        state.users[action.payload.id] = action.payload;
      }
    });
  },
});

export const { addUser, updateUser, removeUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
