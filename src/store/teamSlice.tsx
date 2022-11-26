import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RowData } from "../types";

interface TeamState {
  value: RowData[];
}

const initialState: TeamState = {
  value: [],
};

export const teamSlice = createSlice({
  name: "teamSlice",
  initialState,
  reducers: {
    addTeam: (state, action: PayloadAction<string>) => {
      state.value.push({
        teamId: state.value.length,
        team: action.payload,
        played: 0,
        win: 0,
        draw: 0,
        lost: 0,
        points: 0,
        isHomeTeam: false,
      });
    },
  },
});

export const { addTeam } = teamSlice.actions;

export default teamSlice.reducer;
