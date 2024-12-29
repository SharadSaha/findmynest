import { configureStore } from "@reduxjs/toolkit";
import { authFormReducer } from "./slices/auth-form";
import { loginApi } from "../services/login";
import { postFormReducer } from "./slices/post-form";
import { nestApi } from "../services/nest";
import { mapReducer } from "./slices/map";
import { filterReducer } from "./slices/filter";

export const store = configureStore({
  reducer: {
    authForm: authFormReducer,
    postForm: postFormReducer,
    map: mapReducer,
    filter: filterReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [nestApi.reducerPath]: nestApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware, nestApi.middleware),
});
