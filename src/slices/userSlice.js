// slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    cleanUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, cleanUser } = userSlice.actions;
export default userSlice.reducer; // Export the reducer
