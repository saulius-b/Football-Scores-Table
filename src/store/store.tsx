import { configureStore } from "@reduxjs/toolkit";
import addTeamReducer from "./teamSlice";
import updateScoreReducer from "./matchSlice";

export const store = configureStore({
  reducer: {
    addTeam: addTeamReducer,
    updateScore: updateScoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
