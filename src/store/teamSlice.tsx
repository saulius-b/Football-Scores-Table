import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TeamState {
  value: string[];
  teamScores: {}[];
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
    addScores: (state, action: PayloadAction<object>) => {
      state.teamScores.push(action.payload);
    },
  },
});

export const { addTeam, addScores } = teamSlice.actions;

export default teamSlice.reducer;
