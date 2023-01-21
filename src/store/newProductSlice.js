import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {
    name: null,
    type: "shirt",
    size: "medium",
    brand: null,
    activity: null,
    pockets: false,
  },

  details: {
    description: "",
    features: [],
  },
  image: "",
  value: {
    price: 0,
    discount: null,
  },
};

export const newProductSlice = createSlice({
  name: "newProduct",
  initialState: { value: initialState },
  reducers: {
    updateInfo: (state, action) => {
      state.value.info = action.payload;
    },
    updateDetails: (state, action) => {
      state.value.details = action.payload;
    },
    updateImage: (state, action) => {
      state.value.image = action.payload;
    },
    updatePrice: (state, action) => {
      state.value.value.price = action.payload;
    },
    updateDiscount: (state, action) => {
      state.value.value.discount = action.payload;
    },
    reset: (state) => {
      state.value = initialState;
    },
  },
});

export default newProductSlice.actions;

export const newProductReducer = newProductSlice.reducer;
