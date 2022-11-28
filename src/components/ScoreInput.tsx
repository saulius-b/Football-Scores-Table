import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addMatches, addScores } from "../store/teamSlice";

export function ScoreInput() {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.addTeam.teams);

  const teamsMatched = data.flatMap((team, index) => {
    return data.slice(index + 1).map((otherTeam) => [team, otherTeam]);
  });

  const matchList = teamsMatched.map((item, index) => {
    return (
      <div key={index} className="flex">
        <div className="flex gap-4">
          <div>{item[0]}</div>
          <input
            className="border border-gray-400 rounded w-6 text-center"
            type={"number"}
            onChange={(event) => {
              dispatch(
                addMatches({
                  team: item[0],
                  pointsScored:
                    event.target.value === ""
                      ? 0
                      : parseInt(event.target.value),
                  matchId: index,
                })
              );
              dispatch(addScores(item[0]));
            }}
          ></input>
        </div>
        <div className="px-1">:</div>
        <div className="flex gap-4">
          <input
            className="border border-gray-400 rounded w-6 text-center"
            type={"text"}
            onChange={(event) => {
              dispatch(
                addMatches({
                  team: item[1],
                  pointsScored:
                    event.target.value === ""
                      ? 0
                      : parseInt(event.target.value),
                  matchId: index,
                })
              );
              dispatch(addScores(item[1]));
            }}
          ></input>
          <div>{item[1]}</div>
        </div>
      </div>
    );
  });

  return <div className="flex flex-col gap-1">{matchList}</div>;
}
