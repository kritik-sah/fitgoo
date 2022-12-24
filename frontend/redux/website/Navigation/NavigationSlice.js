import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggle: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isToggle = !state.isToggle;
    },
    toggleNavClose: (state) => {
      state.isToggle = false;
    },
    toggleNavOpen: (state) => {
      state.isToggle = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleNav, toggleNavClose, toggleNavOpen } =
  navigationSlice.actions;

export default navigationSlice.reducer;
