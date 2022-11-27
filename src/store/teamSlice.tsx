import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TeamScores {
  team: string;
  pointsScored: number;
  matchId: number;
}

interface TeamState {
  value: string[];
  teamScores: TeamScores[];
}

const initialState: TeamState = {
  value: [],
  teamScores: [],
};

export const teamSlice = createSlice({
  name: "teamSlice",
  initialState,
  reducers: {
    addTeam: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    addScores: (state, action: PayloadAction<TeamScores>) => {
      //Checking if the same match already had scores entered and updating them (comparing current(store) entries and incoming payload matchId and Team )
      const matchScoringChanged = state.teamScores.find(
        (match) =>
          match.matchId === action.payload.matchId &&
          match.team === action.payload.team
      );
      if (matchScoringChanged) {
        matchScoringChanged.pointsScored = action.payload.pointsScored;
      }
      if (matchScoringChanged === undefined) {
        state.teamScores.push(action.payload);
      }
    },
  },
});

export const { addTeam, addScores } = teamSlice.actions;

export default teamSlice.reducer;
