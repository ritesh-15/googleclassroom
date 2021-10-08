import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProgressState {
  show: boolean;
}

const initialState: ProgressState = {
  show: false,
};

export const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setProgressState: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
  },
});

export const { setProgressState } = progressSlice.actions;

export default progressSlice.reducer;
