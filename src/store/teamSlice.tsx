import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AllMatches {
  team: string;
  pointsScored: number;
  matchId: number;
}

interface TeamScores {
  team: string;
  played: number;
  win: number;
  draw: number;
  lost: number;
  points: number;
}

interface MatchResults {
  matchId: number;
  results: {
    team1: TeamScores;
    team2: TeamScores;
  };
}

interface TeamState {
  teams: string[];
  allMatches: AllMatches[];
  matchResults: MatchResults[];
}

const initialState: TeamState = {
  teams: [],
  allMatches: [],
  matchResults: [],
};

export const footballScoreSlice = createSlice({
  name: "footballScoreSlice",
  initialState,
  reducers: {
    addTeam: (state, action: PayloadAction<string>) => {
      state.teams.push(action.payload);
    },
    addMatch: (state, action: PayloadAction<AllMatches>) => {
      //Checking if the same match already had scores entered and updating them (comparing current(store) entries and incoming payload matchId and Team )
      const selectSameMatchChanges = state.allMatches.find(
        (match) => match.matchId === action.payload.matchId && match.team === action.payload.team
      );
      if (selectSameMatchChanges) {
        selectSameMatchChanges.pointsScored = action.payload.pointsScored;
      }
      if (selectSameMatchChanges === undefined) {
        state.allMatches.push(action.payload);
      }
    },
    matchResults: (state, action: PayloadAction<MatchResults>) => {
      const selectSameMatchChanges = state.matchResults.find((match) => match.matchId === action.payload.matchId);
      const dataToSave = {
        matchId: action.payload.matchId,
        results: {
          team1: {
            team: action.payload.results.team1.team,
            played: action.payload.results.team1.played,
            win: action.payload.results.team1.win,
            draw: action.payload.results.team1.draw,
            lost: action.payload.results.team1.lost,
            points: action.payload.results.team1.points,
          },
          team2: {
            team: action.payload.results.team2.team,
            played: action.payload.results.team2.played,
            win: action.payload.results.team2.win,
            draw: action.payload.results.team2.draw,
            lost: action.payload.results.team2.lost,
            points: action.payload.results.team2.points,
          },
        },
      };
      //Overwriting same match results if that match results changed
      if (selectSameMatchChanges) {
        state.matchResults = [dataToSave];
      }
      //Entering new match results
      if (selectSameMatchChanges === undefined) {
        state.matchResults.push(dataToSave);
      }
    },
  },
});

export const { addTeam, addMatch, matchResults } = footballScoreSlice.actions;

export default footballScoreSlice.reducer;
