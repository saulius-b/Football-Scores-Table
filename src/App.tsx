import React from "react";
import { TeamInput } from "./components/TeamInput";
import { ScoreTable } from "./components/ScoreTable";
import { ScoreInput } from "./components/ScoreInput";

function App() {
  return (
    <div className="h-96 mx-auto max-w-3xl px-4 py-6 my-10 sm:rounded sm:border sm:border-black text-xs">
      <TeamInput></TeamInput>
      <ScoreTable></ScoreTable>
      <ScoreInput></ScoreInput>
    </div>
  );
}

export default App;
