import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TeamMatches {
  team: string;
  pointsScored: number;
  matchId: number;
}

interface TeamScores {
  place: number;
  team: string;
  played: number;
  win: number;
  draw: number;
  lost: number;
  points: number;
}

interface TeamState {
  teams: string[];
  teamMatches: TeamMatches[];
  teamScores: TeamScores[];
}

const initialState: TeamState = {
  teams: [],
  teamMatches: [],
  teamScores: [],
};

export const teamSlice = createSlice({
  name: "teamSlice",
  initialState,
  reducers: {
    addTeam: (state, action: PayloadAction<string>) => {
      state.teams.push(action.payload);
    },
    addMatches: (state, action: PayloadAction<TeamMatches>) => {
      //Checking if the same match already had scores entered and updating them (comparing current(store) entries and incoming payload matchId and Team )
      const selectSameMatchChanges = state.teamMatches.find(
        (match) =>
          match.matchId === action.payload.matchId &&
          match.team === action.payload.team
      );
      if (selectSameMatchChanges) {
        selectSameMatchChanges.pointsScored = action.payload.pointsScored;
      }
      if (selectSameMatchChanges === undefined) {
        state.teamMatches.push(action.payload);
      }
    },
    addScores: (state, action: PayloadAction<string>) => {
      const selectSameTeamNameChanges = state.teamScores.find(
        (team) => team.team === action.payload
      );
      if (selectSameTeamNameChanges) {
        selectSameTeamNameChanges.team = action.payload;
      }
      if (selectSameTeamNameChanges === undefined) {
        state.teamScores.push({
          place: 0,
          team: action.payload,
          played: 0,
          win: 0,
          draw: 0,
          lost: 0,
          points: 0,
        });
      }
    },
  },
});

export const { addTeam, addMatches, addScores } = teamSlice.actions;

export default teamSlice.reducer;
