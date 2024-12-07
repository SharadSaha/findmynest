import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
};

export const post = createSlice({
  name: "post",
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

export const postActions = post.actions;

export const postReducer = post.reducer;
