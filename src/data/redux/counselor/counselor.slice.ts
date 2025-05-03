import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CounselorType } from "data/types/domainTypes/counselor.types";
import { getCounselorById } from "data/services/counselor.service";

type CounselorStateType = {
  counselors: Record<number, CounselorType>;
};

const initialState: CounselorStateType = {
  counselors: {},
};

export const fetchCounselorById = createAsyncThunk(
  "counselor/fetchCounselorById",
  async (id: number, { getState }) => {
    const state = getState() as { counselor: CounselorStateType };
    if (state.counselor.counselors[id]) {
      return state.counselor.counselors[id];
    }
    return await getCounselorById(id);
  }
);

const counselorSlice = createSlice({
  name: "counselor",
  initialState,
  reducers: {
    addCounselor: (state, action: PayloadAction<CounselorType>) => {
      if (action.payload.id !== undefined) {
        state.counselors[action.payload.id] = action.payload;
      } else {
        console.warn("Counselor ID is undefined", action.payload);
      }
    },
    updateCounselor: (
      state,
      action: PayloadAction<{ id: number; updatedCounselor: CounselorType }>
    ) => {
      const { id, updatedCounselor } = action.payload;
      state.counselors[id] = updatedCounselor;
    },
    removeCounselor: (state, action: PayloadAction<number>) => {
      delete state.counselors[action.payload];
    },
    setCounselors: (state, action: PayloadAction<CounselorType[]>) => {
      action.payload.forEach((counselor) => {
        if (counselor.id !== undefined) {
          state.counselors[counselor.id] = counselor;
        } else {
          console.warn("Counselor ID is undefined", counselor);
        }
      });
    },
    resetCounselors: (state) => {
      state.counselors = {};
    },
  },
  extraReducers: (builder) => {
    // Handle the fulfilled state of the fetchCounselorById async thunk
    builder.addCase(fetchCounselorById.fulfilled, (state, action) => {
      if (action.payload.id !== undefined) {
        state.counselors[action.payload.id] = action.payload;
      } else {
        console.warn("Fetched counselor ID is undefined", action.payload);
      }
    });
  },
});

export const {
  addCounselor,
  updateCounselor,
  removeCounselor,
  setCounselors,
  resetCounselors,
} = counselorSlice.actions;

export default counselorSlice.reducer;
