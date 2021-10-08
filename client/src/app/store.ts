import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/user/userSlice";
import messageSlice from "../reducers/message/messageSlice";
import registerSlice from "../reducers/register/registerSlice";
import modalSlice from "../reducers/modal/modalSlice";
import detailsSlice from "../reducers/classDetailsSlice/detailsSlice";
import progressSlice from "../reducers/progress/progressSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    message: messageSlice,
    register: registerSlice,
    modal: modalSlice,
    classDetails: detailsSlice,
    progress: progressSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
