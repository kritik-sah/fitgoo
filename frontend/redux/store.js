import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./website/Navigation/NavigationSlice";

export const store = configureStore({
  reducer: {
    navigation: navReducer,
  },
});
