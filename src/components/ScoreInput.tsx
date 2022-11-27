import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addScores } from "../store/teamSlice";

export function ScoreInput() {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.addTeam.value);

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
                addScores({
                  team: item[0],
                  pointsScored:
                    event.target.value === ""
                      ? 0
                      : parseInt(event.target.value),
                  matchId: index,
                })
              );
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
                addScores({
                  team: item[1],
                  pointsScored:
                    event.target.value === ""
                      ? 0
                      : parseInt(event.target.value),
                  matchId: index,
                })
              );
            }}
          ></input>
          <div>{item[1]}</div>
        </div>
      </div>
    );
  });

  return <div className="flex flex-col gap-1">{matchList}</div>;
}
