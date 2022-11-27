import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TeamState {
  value: string[];
}

const initialState: TeamState = {
  value: [],
};

export const teamSlice = createSlice({
  name: "teamSlice",
  initialState,
  reducers: {
    addTeam: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addTeam } = teamSlice.actions;

export default teamSlice.reducer;
