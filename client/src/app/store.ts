import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/user/userSlice";
import messageSlice from "../reducers/message/messageSlice";
import registerSlice from "../reducers/register/registerSlice";
import modalSlice from "../reducers/modal/modalSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    message: messageSlice,
    register: registerSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
