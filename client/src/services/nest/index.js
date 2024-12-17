import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base-query";

export const nestApi = createApi({
  reducerPath: "nestApi",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    addNest: builder.mutation({
      query: (nest) => ({
        url: "nest/",
        method: "POST",
        body: nest,
      }),
    }),
  }),
});

export const { useAddNestMutation } = nestApi;
