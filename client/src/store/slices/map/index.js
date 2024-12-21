import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  markers: [],
};

export const map = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMarkers: (state, action) => ({ ...state, markers: action.payload }),
    resetForm: () => ({ ...initialState }),
  },
});

export const mapActions = map.actions;

export const mapReducer = map.reducer;
