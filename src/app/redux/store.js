import { configureStore } from "@reduxjs/toolkit";
import parksReducer from "./slices/parksSlice";
import articalsReducer from "./slices/articalsSlice";

export const store = configureStore({
  reducer: {
    parks: parksReducer,
    articles: articalsReducer,
  },
});
