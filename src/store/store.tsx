import { configureStore } from "@reduxjs/toolkit";
import addTeamReducer from "./addTeamSlice";

export const store = configureStore({
  reducer: {
    addTeam: addTeamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
