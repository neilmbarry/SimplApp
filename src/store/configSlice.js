import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
  searchOpen: false,
  modal: false,
  token: null,
  userImage: null,
  notification: null,
  currentProduct: null,
  typeOptions: [],
  brandOptions: [],
  activityOptions: [],
  sizeOptions: [],
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
    setUserImage: (state, action) => {
      state.value.userImage = action.payload;
    },
    setFilterModal: (state, action) => {
      state.value.filterModal = action.payload;
    },
    closeFilterModal: (state) => {
      state.value.filterModal = false;
    },
    setCurrentProduct: (state, action) => {
      state.value.currentProduct = action.payload;
    },
    updateQuery: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export default configSlice.actions;

export const configReducer = configSlice.reducer;
