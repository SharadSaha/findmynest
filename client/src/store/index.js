import { configureStore } from "@reduxjs/toolkit";
import { authFormReducer } from "./slices/auth-form";
import { postReducer } from "./slices/post";
import { loginApi } from "../services/login";
import { postFormReducer } from "./slices/post-form";

export const store = configureStore({
  reducer: {
    authForm: authFormReducer,
    post: postReducer,
    postForm: postFormReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});
