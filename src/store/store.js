import { configureStore } from "@reduxjs/toolkit";

import { configReducer } from "./configSlice";
import { newProductReducer } from "./newProductSlice";
import { queryReducer } from "./querySlice";

const store = configureStore({
  reducer: {
    config: configReducer,
    newProduct: newProductReducer,
    query: queryReducer,
  },
});

export default store;
