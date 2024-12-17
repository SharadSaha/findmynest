import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = () =>
  fetchBaseQuery({
    baseUrl: "http://192.168.31.175:8080/api/",
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `${token}`);
      }

      return headers;
    },
  });
