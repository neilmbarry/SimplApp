import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
  searchOpen: false,
  modal: false,
};

export const configSlice = createSlice({
  name: "config",
  initialState: { value: initialState },
  reducers: {
    toggleMenu: (state) => {
      state.value.menuOpen = !state.value.menuOpen;
    },
    toggleSearch: (state) => {
      state.value.searchOpen = !state.value.searchOpen;
    },
    closeAll: (state) => {
      state.value.menuOpen = false;
      state.value.searchOpen = false;
    },
    setModal: (state, action) => {
      state.value.modal = action.payload;
    },
  },
});

export default configSlice.actions;

export const configReducer = configSlice.reducer;
