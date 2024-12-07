import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/login";
import { postReducer } from "./slices/post";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    post: postReducer,
  },
});
