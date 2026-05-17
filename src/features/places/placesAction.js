import { createSlice } from "@reduxjs/toolkit";

const placesSlice = createSlice({
  name: "places",

  initialState: {
    history: [],
    selectedPlace: null,
    loading: false,
  },

  reducers: {
    addSearchHistory: (state, action) => {
      state.history.unshift(action.payload);
    },

    searchPlaceRequest: (state) => {
      state.loading = true;
    },

    searchPlaceSuccess: (state, action) => {
      state.loading = false;
      state.selectedPlace = action.payload;
    },

    searchPlaceFailure: (state) => {
      state.loading = false;
    },

    resetSelectedPlace: (state) => {
      state.selectedPlace = null;
    }
  },
});

export const {
  addSearchHistory,
  searchPlaceRequest,
  searchPlaceSuccess,
  searchPlaceFailure,
  resetSelectedPlace,
} = placesSlice.actions;

export default placesSlice.reducer;