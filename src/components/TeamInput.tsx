import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addTeam, createPairs } from "../store/footballSlice";

export function TeamInput() {
  const [team, setTeam] = useState("");
  const dispatch = useDispatch();
  const allMatches = useSelector((state: RootState) => state.football.allMatches);

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
        disabled={allMatches.length > 0 ? true : false}
        onClick={() => {
          dispatch(addTeam(team));
          dispatch(createPairs());
          setTeam("");
        }}
      >
        Add
      </button>
    </div>
  );
}
