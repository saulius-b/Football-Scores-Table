import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

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
              // dispatch(
              //   updateScore({
              //     teamId: team1.teamId,
              //     pointsScored: parseInt(event.target.value),
              //   })
              // );
            }}
          ></input>
        </div>
        <div className="px-1">:</div>
        <div className="flex gap-4">
          <input
            className="border border-gray-400 rounded w-6 text-center"
            type={"text"}
            onChange={(event) => {
              // dispatch(
              //   updateScore({
              //     teamId: team2.teamId,
              //     pointsScored: parseInt(event.target.value),
              //   })
              // );
            }}
          ></input>
          <div>{item[1]}</div>
        </div>
      </div>
    );
  });

  return <div className="flex flex-col gap-1">{matchList}</div>;
}
