import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { matchResults } from "../store/footballSlice";
import { useEffect } from "react";
import { Draw, Team1Won, Team2Won } from "../features/matchCalculations";

import { ScoreInputRow } from "./ScoreInputRow";

export function ScoreInput() {
  const dispatch = useDispatch();
  const pairedTeams = useSelector((state: RootState) => state.football.pairedTeams);
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

  return (
    <div className="flex flex-col gap-1">
      {pairedTeams.map((item, index) => {
        const scores = allMatches.filter((match) => match.matchId === index);
        const team1Score = scores.filter((team) => team.team === item[0]).map((x) => x.pointsScored);
        const team2Score = scores.filter((team) => team.team === item[1]).map((x) => x.pointsScored);

        return (
          <ScoreInputRow
            key={index}
            item={item}
            index={index}
            team1Score={team1Score.length > 0 ? team1Score : undefined}
            team2Score={team2Score.length > 0 ? team2Score : undefined}
          ></ScoreInputRow>
        );
      })}
    </div>
  );
}
