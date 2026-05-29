import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

  name: 'cart',

  initialState: {
    count: 0,
  },

  reducers: {
    increment: (state) => {
      state.count = state + 1;
    }
  },
});

export const { increment } = cartSlice.actions;
export default cartSlice.reducer;