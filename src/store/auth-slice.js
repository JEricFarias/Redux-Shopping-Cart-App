import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggerdIn: false },
  reducers: {
    login(state) {
      state.isLoggerdIn = true;
    },
    logout(state) {
      state.isLoggerdIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
