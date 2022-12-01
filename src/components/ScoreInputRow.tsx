import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMatch } from "../store/footballSlice";

export function ScoreInputRow(props: { item: string[]; index: number; team1Score?: number[]; team2Score?: number[] }) {
  const dispatch = useDispatch();

  const [team1Value, setTeam1Value] = useState<number>(props.team1Score === undefined ? 0 : props.team1Score[0]);
  const [team2Value, setTeam2Value] = useState<number>(props.team2Score === undefined ? 0 : props.team2Score[0]);

  return (
    <div className="flex justify-center">
      <div className="flex w-24 gap-2 justify-end">
        <div>{props.item[0]}</div>
        <input
          className="border border-gray-400 rounded w-4 text-center"
          type={"number"}
          defaultValue={team1Value}
          onChange={(event) => {
            setTeam1Value(parseInt(event.target.value));
            dispatch(
              addMatch({
                team: props.item[0],
                pointsScored: event.target.value === "" ? 0 : parseInt(event.target.value),
                matchId: props.index,
              })
            );
          }}
        ></input>
      </div>
      <div className="px-1">:</div>
      <div className="flex w-24 gap-2 justify-start">
        <input
          className="border border-gray-400 rounded w-4 text-center"
          type={"number"}
          defaultValue={team2Value}
          onChange={(event) => {
            setTeam2Value(parseInt(event.target.value));
            dispatch(
              addMatch({
                team: props.item[1],
                pointsScored: event.target.value === "" ? 0 : parseInt(event.target.value),
                matchId: props.index,
              })
            );
          }}
        ></input>
        <div>{props.item[1]}</div>
      </div>
    </div>
  );
}
