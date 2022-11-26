import { useDispatch, useSelector } from "react-redux";
import { calculateScore } from "../features/score";
import { RootState } from "../store/store";
import { updateScore } from "../store/matchSlice";

export function ScoreInput() {
  const dispatch = useDispatch();
  const tableData = useSelector((state: RootState) => state.addTeam.value);

  const splitTeams = calculateScore(tableData);

  console.log(splitTeams);

  const data = splitTeams.map((item, index) => {
    const team1 = item[0];
    const team2 = item[1];

    return (
      <div key={index} className="flex">
        <div className="flex gap-4">
          <div>{item[0].team}</div>
          <input
            className="border border-gray-400 rounded w-6 text-center"
            type={"number"}
            onChange={(event) => {
              dispatch(
                updateScore({
                  teamId: team1.teamId,
                  pointsScored: parseInt(event.target.value),
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
                updateScore({
                  teamId: team2.teamId,
                  pointsScored: parseInt(event.target.value),
                })
              );
            }}
          ></input>
          <div>{item.length === 1 ? "" : item[1].team}</div>
        </div>
      </div>
    );
  });

  return <div className="flex flex-col gap-1">{data}</div>;
}
