import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NewMaterialState {
  title: string;
  description: string;
  topic: string;
}

const initialState: NewMaterialState = {
  title: "",
  description: "",
  topic: "",
};

export const newMaterialSlice = createSlice({
  name: "newMaterial",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setTopic: (state, action: PayloadAction<string>) => {
      state.topic = action.payload;
    },
  },
});

export const { setDescription, setTitle, setTopic } = newMaterialSlice.actions;

export default newMaterialSlice.reducer;
