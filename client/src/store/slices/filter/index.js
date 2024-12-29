import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  isApplied: false,
};

export const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => ({ ...state, ...action.payload }),
    resetFilter: () => ({ ...initialState }),
  },
});

export const filterActions = filter.actions;

export const filterReducer = filter.reducer;
