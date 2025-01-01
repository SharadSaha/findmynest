import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const API_URL = import.meta.env.VITE_API_URL;
export const baseQuery = () =>
  fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `${token}`);
      }

      return headers;
    },
  });
