import { RootState } from "data/redux/store";
export const selectCounselor = (state: RootState) => state.counselor;
export const selectCounselorArr = (state: RootState) =>
  state.counselor.counselors;
