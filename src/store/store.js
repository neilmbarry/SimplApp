import { configureStore } from "@reduxjs/toolkit";

import { configReducer } from "./configSlice";
import { newProductReducer } from "./newProductSlice";

const store = configureStore({
  reducer: {
    config: configReducer,
    newProduct: newProductReducer,
  },
});

export default store;
