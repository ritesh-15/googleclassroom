import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payload } from "../register/registerSlice";

export interface OptionsState {
  options: { title: string }[];
}

const initialState: OptionsState = {
  options: [
    {
      title: "Create new topic",
    },
  ],
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setOptions: (state, action: PayloadAction<{ title: string }>) => {
      return {
        ...state,
        options: [...state.options, action.payload],
      };
    },
    clearOptions: (state) => {
      state.options = [{ title: "Create new topic" }];
    },
  },
});

export const { setOptions, clearOptions } = optionsSlice.actions;

export default optionsSlice.reducer;
