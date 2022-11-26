import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TeamState {
  value: string[];
}

const initialState: TeamState = {
  value: [],
};

export const addTeamSlice = createSlice({
  name: "addTeam",
  initialState,
  reducers: {
    addTeam: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addTeam } = addTeamSlice.actions;

export default addTeamSlice.reducer;
