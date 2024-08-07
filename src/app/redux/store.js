import { configureStore } from "@reduxjs/toolkit";
import parksReducer from "./slices/parksSlice";
import articalsReducer from "./slices/articalsSlice";
import activitiesReducer from "./slices/activitiesSlice";
import campgroundReducer from "./slices/campgroundSlice";
import eventsReducer from "./slices/eventsSlice";
import lessonPlansReducer from "./slices/lessonPlansSlice";
import topicsReducer from "./slices/topicsSlice";
import amenitiesReducer from "./slices/amenitiesSlice";
import thingsToDoReducer from "./slices/thingsToDoSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    parks: parksReducer,
    articles: articalsReducer,
    activities: activitiesReducer,
    campground: campgroundReducer,
    events: eventsReducer,
    lessonPlans: lessonPlansReducer,
    topics: topicsReducer,
    amenities: amenitiesReducer,
    thingsToDo: thingsToDoReducer,
    auth: authReducer,
  },
});
