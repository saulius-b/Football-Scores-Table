import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MatchData } from "../types";

interface Matches {
  value: MatchData[];
}

const initialState: Matches = {
  value: [],
};

export const matchSlice = createSlice({
  name: "scoringSlice",
  initialState,
  reducers: {
    updateScore: (state, action: PayloadAction<MatchData>) => {
      console.log(action.payload);
      state.value.push({
        teamId: action.payload.teamId,
        pointsScored: action.payload.pointsScored,
      });
    },
  },
});

export const { updateScore } = matchSlice.actions;

export default matchSlice.reducer;
