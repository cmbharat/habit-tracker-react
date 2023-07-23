import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./HabitsSlice";

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});
