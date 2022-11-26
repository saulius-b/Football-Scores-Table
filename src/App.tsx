import React from "react";
import { TeamInput } from "./components/TeamInput";
import { ScoreTable } from "./components/ScoreTable";
import { ScoreInput } from "./components/ScoreInput";

function App() {
  return (
    <div className="bg-slate-100">
      <TeamInput></TeamInput>
      <ScoreTable></ScoreTable>
      <ScoreInput></ScoreInput>
    </div>
  );
}

export default App;
