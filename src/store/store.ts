import { configureStore } from "@reduxjs/toolkit";
import addTeamReducer from "./footballSlice";

export const store = configureStore({
  reducer: {
    football: addTeamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
