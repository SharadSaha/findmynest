import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  imageUrl: "",
  location: "",
  priceRange: {
    low: "",
    high: "",
  },
};

export const postForm = createSlice({
  name: "postForm",
  initialState,
  reducers: {
    setForm: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => ({ ...initialState }),
  },
});

export const postFormActions = postForm.actions;

export const postFormReducer = postForm.reducer;
