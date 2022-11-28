import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addTeam } from "../store/teamSlice";

export function TeamInput() {
  const [team, setTeam] = useState("");
  const dispatch = useDispatch();
  const teams = useSelector((state: RootState) => state.addTeam.teams);

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
        onClick={() => {
          const selectDuplicateTeam = teams.find((item) => item === team);
          if (selectDuplicateTeam) return;
          dispatch(addTeam(team));
          setTeam("");
        }}
      >
        Add
      </button>
    </div>
  );
}
