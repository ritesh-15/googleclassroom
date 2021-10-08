import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassDetails } from "../../pages/class/useViewClass";

export interface ClassState {
  classRoom: ClassDetails | null;
}

const initialState: ClassState = {
  classRoom: null,
};

export const detailsSlice = createSlice({
  name: "classDetails",
  initialState,
  reducers: {
    setClassDetails: (state, action: PayloadAction<ClassDetails>) => {
      state.classRoom = action.payload;
    },
    updateBanner: (state, action: PayloadAction<string>) => {
      if (state.classRoom?.banner) {
        state.classRoom.banner = action.payload;
      }
    },
  },
});

export const { setClassDetails, updateBanner } = detailsSlice.actions;

export default detailsSlice.reducer;
