import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = () =>
  fetchBaseQuery({
    baseUrl: "http://192.168.31.175:8080/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  });
