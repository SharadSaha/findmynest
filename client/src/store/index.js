import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/login";
import { postReducer } from "./slices/post";
import { loginApi } from "../services/login";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    post: postReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});
