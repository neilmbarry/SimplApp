import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
};

export const configSlice = createSlice({
  name: "config",
  initialState: { value: initialState },
  reducers: {
    setMenuOpen: (state, action) => {
      state.value.menuOpen = action.payload;
    },
    toggleMenu: (state) => {
      state.value.menuOpen = !state.value.menuOpen;
    },
  },
});

export default configSlice.actions;

export const configReducer = configSlice.reducer;
