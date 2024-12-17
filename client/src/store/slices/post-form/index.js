import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  price: 100,
  imgUrls: [],
  lat: "",
  long: "",
  address: "",
  city: "",
  bedroomCount: 0,
  bathroomCount: 0,
  utilities: "",
  petsPolicy: "",
  incomePolicy: "",
  size: 0,
  schoolCount: 0,
  busCount: 0,
  restaurantCount: 0,
  userActionType: "buy",
  nestType: "apartment",
  description: "",
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
