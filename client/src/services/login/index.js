import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base-query";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signupUser: builder.mutation({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userId, ...payload }) => ({
        url: `auth/${userId}`,
        method: "PUT",
        body: payload.user,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useSignupUserMutation,
  useLogoutUserMutation,
  useUpdateUserMutation,
} = loginApi;
