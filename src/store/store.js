import { configureStore } from "@reduxjs/toolkit";

import { configReducer } from "./configSlice";

const store = configureStore({
  reducer: {
    config: configReducer,
  },
});

export default store;
