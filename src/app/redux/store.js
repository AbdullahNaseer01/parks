import { configureStore } from "@reduxjs/toolkit";
import parksReducer from "./slices/parksSlice";

export const store = configureStore({
  reducer: {
    parks: parksReducer,
  },
});
