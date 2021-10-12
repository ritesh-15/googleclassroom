import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NewMaterialState {
  title: string;
  description: string;
  topic: string;
  type: string;
  due: string;
  points: string;
  newTopic: string;
}

const initialState: NewMaterialState = {
  title: "",
  description: "",
  topic: "",
  type: "",
  due: "",
  points: "",
  newTopic: "",
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
    setDue: (state, action: PayloadAction<string>) => {
      state.due = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setPoints: (state, action: PayloadAction<string>) => {
      state.points = action.payload;
    },
    setNewTopic: (state, action: PayloadAction<string>) => {
      state.newTopic = action.payload;
    },
  },
});

export const {
  setDescription,
  setTitle,
  setTopic,
  setDue,
  setNewTopic,
  setPoints,
  setType,
} = newMaterialSlice.actions;

export default newMaterialSlice.reducer;
