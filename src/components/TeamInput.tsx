import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeam } from "../store/addTeamSlice";

export function TeamInput() {
  const [team, setTeam] = useState("");
  const dispatch = useDispatch();

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
        className="border border-gray-400 rounded bg-gray-200 px-6 py-1"
        onClick={() => dispatch(addTeam(team))}
      >
        Add
      </button>
    </div>
  );
}
