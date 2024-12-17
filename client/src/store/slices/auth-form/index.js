import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
  user: {
    name: "",
    username: "",
    email: "",
    password: "",
    photo: "",
  },
};

export const authForm = createSlice({
  name: "login",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const loginUser = (state) =>
  state.authForm.user.username ? state.authForm.user : undefined;

export const authFormSelectors = { loginUser };

export const authFormActions = authForm.actions;

export const authFormReducer = authForm.reducer;
