import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
  searchOpen: false,
  modal: false,
  token: null,
  notification: null,
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
      state.value.filterModal = false;
    },
    setModal: (state, action) => {
      state.value.modal = action.payload;
    },
    setNotification: (state, action) => {
      state.value.notification = action.payload;
    },
    setToken: (state, action) => {
      state.value.token = action.payload;
    },
    setFilterModal: (state, action) => {
      state.value.filterModal = action.payload;
    },
    closeFilterModal: (state) => {
      state.value.filterModal = false;
    },
  },
});

export default configSlice.actions;

export const configReducer = configSlice.reducer;
