import { configureStore } from "@reduxjs/toolkit";
import { increment } from "./cartSlice";
import { sertSearchTerm } from "./searchSlice";

export const stpre = configureStore({
  reducer: {
    cartHome: cartReducer,
    searchHome: searchReducer,
  },
});

    