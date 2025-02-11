// slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // Name of the slice
  initialState: { count: 0 }, // Initial state
  reducers: {
    increment: (state, action) => {
      state.count += action.payload; // Increment the counter
    },
    decrement: (state, action) => {
      if (state.count > 0) state.count -= action.payload; // Decrement the counter
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // Export action creators
export default counterSlice.reducer; // Export the reducer
