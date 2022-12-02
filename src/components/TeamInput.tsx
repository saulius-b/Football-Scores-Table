import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTeam, createPairs } from "../store/footballSlice";
import { RootState } from "../store/store";

export function TeamInput() {
  const [team, setTeam] = useState("");
  const dispatch = useDispatch();
  const teams = useSelector((state: RootState) => state.football.teams);
  const duplicateTeam = teams.find((item) => item === team);

  function handleClick() {
    if (duplicateTeam) return;
    dispatch(addTeam(team));
    dispatch(createPairs());
    setTeam("");
  }

  return (
    <div className="p-2">
      <input
        className="border border-gray-400 rounded mr-2 px-3 py-1"
        type="text"
        placeholder="New team"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
      />
      <button
        className="border border-gray-400 rounded bg-gray-200 px-6 py-1 disabled:opacity-50 disabled:bg-red-100"
        onClick={() => handleClick()}
      >
        Add
      </button>
    </div>
  );
}
