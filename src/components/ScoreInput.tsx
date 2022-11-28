import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addMatch, matchResults } from "../store/teamSlice";
import { useEffect } from "react";

export function ScoreInput() {
  const dispatch = useDispatch();
  const teams = useSelector((state: RootState) => state.addTeam.teams);
  const allMatches = useSelector((state: RootState) => state.addTeam.allMatches);
  const matchIds = [...Array.from(new Set(allMatches.map((item) => item.matchId)))];

  useEffect(() => {
    //Checking that a match has both scores entered and only then dispatching results
    matchIds.forEach((id) => {
      if (allMatches.filter((item) => item.matchId === id).length === 2) {
        dispatch(
          matchResults({
            matchId: id,
            results: {
              team1: {
                team: "team1",
                played: 0,
                win: 0,
                draw: 0,
                lost: 0,
                points: 0,
              },
              team2: {
                team: "team2",
                played: 0,
                win: 0,
                draw: 0,
                lost: 0,
                points: 0,
              },
            },
          })
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, allMatches]);

  //Pairing entered teams to play with each other once
  const pairedTeams = teams.flatMap((team, index) => {
    return teams.slice(index + 1).map((otherTeam) => [team, otherTeam]);
  });

  const matchList = pairedTeams.map((item, index) => {
    return (
      <div key={index} className="flex">
        <div className="flex gap-4">
          <div>{item[0]}</div>
          <input
            className="border border-gray-400 rounded w-6 text-center"
            type={"number"}
            onChange={(event) => {
              dispatch(
                addMatch({
                  team: item[0],
                  pointsScored: event.target.value === "" ? 0 : parseInt(event.target.value),
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
                addMatch({
                  team: item[1],
                  pointsScored: event.target.value === "" ? 0 : parseInt(event.target.value),
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
