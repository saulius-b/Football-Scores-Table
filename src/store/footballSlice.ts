import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllMatches, MatchResults, TeamState } from "../types";

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
      const selectDuplicateTeam = state.teams.find((item) => item === action.payload);
      if (selectDuplicateTeam) return;
      if (action.payload === "") return;
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
      const selectExistingTeam1Match = state.matchResults.find(
        (match) => match.matchId === action.payload.team1.matchId && match.team === action.payload.team1.team
      );
      const selectExistingTeam2Match = state.matchResults.find(
        (match) => match.matchId === action.payload.team2.matchId && match.team === action.payload.team2.team
      );
      const team1 = {
        team: action.payload.team1.team,
        played: action.payload.team1.played,
        win: action.payload.team1.win,
        draw: action.payload.team1.draw,
        lost: action.payload.team1.lost,
        points: action.payload.team1.points,
        matchId: action.payload.team1.matchId,
      };
      const team2 = {
        team: action.payload.team2.team,
        played: action.payload.team2.played,
        win: action.payload.team2.win,
        draw: action.payload.team2.draw,
        lost: action.payload.team2.lost,
        points: action.payload.team2.points,
        matchId: action.payload.team2.matchId,
      };

      //Overwriting same match results if that match results changed
      if (selectExistingTeam1Match) {
        selectExistingTeam1Match.played = team1.played;
        selectExistingTeam1Match.win = team1.win;
        selectExistingTeam1Match.draw = team1.draw;
        selectExistingTeam1Match.lost = team1.lost;
        selectExistingTeam1Match.points = team1.points;
      }
      if (selectExistingTeam2Match) {
        selectExistingTeam2Match.played = team2.played;
        selectExistingTeam2Match.win = team2.win;
        selectExistingTeam2Match.draw = team2.draw;
        selectExistingTeam2Match.lost = team2.lost;
        selectExistingTeam2Match.points = team2.points;
      }
      //Entering new match results
      if (selectExistingTeam1Match === undefined) {
        state.matchResults.push(team1);
      }
      if (selectExistingTeam2Match === undefined) {
        state.matchResults.push(team2);
      }
    },
  },
});

export const { addTeam, addMatch, matchResults } = footballScoreSlice.actions;

export default footballScoreSlice.reducer;
