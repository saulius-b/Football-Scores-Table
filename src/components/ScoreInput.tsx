import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addMatch, matchResults } from "../store/footballSlice";
import { useEffect } from "react";
import { Draw, Team1Won, Team2Won } from "../features/matchCalculations";

export function ScoreInput() {
  const dispatch = useDispatch();
  const teams = useSelector((state: RootState) => state.football.teams);
  const allMatches = useSelector((state: RootState) => state.football.allMatches);
  const matchIds = [...Array.from(new Set(allMatches.map((item) => item.matchId)))];

  useEffect(() => {
    matchIds.forEach((id) => {
      //Checking that a match has both scores(2) entered and only then dispatching results
      if (allMatches.filter((item) => item.matchId === id).length === 2) {
        //
        //finding both objects(results of both teams) of the same match
        const match = allMatches.filter((item) => item.matchId === id);

        //Points to add if team1 won
        if (match[0].pointsScored > match[1].pointsScored) {
          dispatch(matchResults(Team1Won(id, match)));
        }

        //Points to add if both teams scored equally
        if (match[0].pointsScored === match[1].pointsScored) {
          dispatch(matchResults(Draw(id, match)));
        }

        //Points to add if team2 won
        if (match[0].pointsScored < match[1].pointsScored) {
          dispatch(matchResults(Team2Won(id, match)));
        }
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
      <div key={index} className="flex justify-center">
        <div className="flex w-24 gap-2 justify-end">
          <div>{item[0]}</div>
          <input
            className="border border-gray-400 rounded w-4 text-center"
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
        <div className="flex w-24 gap-2 justify-start">
          <input
            className="border border-gray-400 rounded w-4 text-center"
            type={"number"}
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
