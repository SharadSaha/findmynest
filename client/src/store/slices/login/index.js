import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
};

export const login = createSlice({
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
  },
});

export const loginActions = login.actions;

export const loginReducer = login.reducer;
