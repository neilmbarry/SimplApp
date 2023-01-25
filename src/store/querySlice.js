import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: null,
  sortBy: null,
  type: [],
  brand: [],
  activity: [],
  size: [],
};

export const querySlice = createSlice({
  name: "query",
  initialState: { value: initialState },
  reducers: {
    setSearchTerm: (state, action) => {
      state.value.searchTerm = action.payload;
    },
    setSortBy: (state, action) => {
      state.value.sortBy = action.payload;
    },
    setType: (state, action) => {
      state.value.type = action.payload;
    },
    setBrand: (state, action) => {
      state.value.brand = action.payload;
    },
    setSize: (state, action) => {
      state.value.size = action.payload;
    },
    setActivity: (state, action) => {
      state.value.activity = action.payload;
    },
    updateQuery: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    reset: (state) => {
      state.value = initialState;
    },
  },
});

export default querySlice.actions;

export const queryReducer = querySlice.reducer;
