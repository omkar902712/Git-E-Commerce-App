import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    cartHome: cartReducer,
    searchHome: searchReducer,
  },
});