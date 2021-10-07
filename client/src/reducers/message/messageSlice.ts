import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MessageInterface {
  message: string;
  open: boolean;
  type?: string;
}

const initialState: MessageInterface = {
  message: "",
  open: false,
  type: "success",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<MessageInterface>) => {
      state.message = action.payload.message;
      state.open = action.payload.open;
      state.type = action.payload.type || "success";
    },
    unSetMessage: (state) => {
      state.open = false;
    },
  },
});

export const { setMessage, unSetMessage } = messageSlice.actions;

export default messageSlice.reducer;
