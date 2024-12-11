import { configureStore } from "@reduxjs/toolkit";
import { authFormReducer } from "./slices/auth-form";
import { postReducer } from "./slices/post";
import { loginApi } from "../services/login";

export const store = configureStore({
  reducer: {
    authForm: authFormReducer,
    post: postReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});
