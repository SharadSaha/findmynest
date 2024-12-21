import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base-query";
import { mapActions } from "../../store/slices/map";

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
    getAllNests: builder.query({
      query: () => "nest/",
      transformResponse: (res) => res.data,
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        queryFulfilled.then((res) => {
          dispatch(
            mapActions.setMarkers(
              res.data.map((nest) => ({
                lat: nest.lat ? parseFloat(nest.lat) : 0,
                lng: nest.long ? parseFloat(nest.long) : 0,
              }))
            )
          );
        });
      },
    }),
    getNest: builder.query({
      query: (id) => `nest/${id}`,
      transformResponse: (res) => res.data,
    }),
    getNestsByUser: builder.query({
      query: (userId) => `nest/user/${userId}`,
      transformResponse: (res) => res.data,
    }),
    updateNest: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `nest/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    getCityList: builder.query({
      query: () => "nest/filter/city-list",
      transformResponse: (res) => res.data,
    }),
  }),
});

export const {
  useAddNestMutation,
  useGetAllNestsQuery,
  useUpdateNestMutation,
  useGetNestsByUserQuery,
  useGetNestQuery,
  useLazyGetAllNestsQuery,
  useGetCityListQuery,
} = nestApi;
