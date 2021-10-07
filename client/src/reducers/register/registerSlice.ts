import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Register {
  user: {
    name?: string;
    email?: string;
    password?: string;
    avatar?: string;
  };
}

export interface Payload {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
}

const initialState: Register = {
  user: {
    name: "",
    email: "",
    password: "",
    avatar: "",
  },
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<Payload>) => {
      const { name } = action.payload;
      state.user.name = name;
    },
    setEmail: (state, action: PayloadAction<Payload>) => {
      const { email } = action.payload;
      state.user.email = email;
    },
    setPassword: (state, action: PayloadAction<Payload>) => {
      const { password } = action.payload;
      state.user.password = password;
    },
    setAvatar: (state, action: PayloadAction<Payload>) => {
      const { avatar } = action.payload;
      state.user.avatar = avatar;
    },
  },
});

export const { setAvatar, setEmail, setName, setPassword } =
  registerSlice.actions;

export default registerSlice.reducer;
