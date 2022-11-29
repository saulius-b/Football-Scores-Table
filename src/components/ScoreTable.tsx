import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { TeamScores } from "../types";

export function ScoreTable() {
  const teams = useSelector((state: RootState) => state.addTeam.teams);
  const scores = useSelector((state: RootState) => state.addTeam.matchResults);

  //Converting all match results array into a teamlist with all results of the matches
  const team1Array = scores.map((item) => {
    return item.results.team1;
  });
  const team2Array = scores.map((item) => {
    return item.results.team2;
  });

  const teamList = team1Array.concat(team2Array);
  console.log(teamList);

  let sortedTeams: TeamScores[][] = [];

  if (teamList.length > 1) {
    teams.forEach((team) => {
      sortedTeams.push(
        teamList.filter((a) => {
          return a.team === team;
        })
      );
    });
    console.log(sortedTeams);

    // const team1 = sortedTeams[0];
    // const team2 = sortedTeams[1];
    // const team3 = sortedTeams[2];

    // const team1Score = {
    //   team: team1[0].team,
    //   played: team1[0].played + team1[1].played,
    //   win: team1[0].win + team1[1].win,
    //   draw: team1[0].draw + team1[1].draw,
    //   lost: team1[0].lost + team1[1].lost,
    //   points: team1[0].points + team1[1].points,
    // };

    // const team2Score = {
    //   team: team2[0].team,
    //   played: team2[0].played + team2[1].played,
    //   win: team2[0].win + team2[1].win,
    //   draw: team2[0].draw + team2[1].draw,
    //   lost: team2[0].lost + team2[1].lost,
    //   points: team2[0].points + team2[1].points,
    // };

    // const team3Score = {
    //   team: team3[0].team,
    //   played: team3[0].played + team3[1].played,
    //   win: team3[0].win + team3[1].win,
    //   draw: team3[0].draw + team3[1].draw,
    //   lost: team3[0].lost + team3[1].lost,
    //   points: team3[0].points + team3[1].points,
    // };
    // console.log(team1Score);
    // console.log(team2Score);
    // console.log(team3Score);
  }

  const headersText: string[] = ["Place", "Team", "Played", "Win", "Draw", "Lost", "Points"];

  const tableHeader = headersText.map((item, index) => {
    return (
      <th key={index} className="px-2 sm:px-4 font-semibold border border-gray-400">
        {item}
      </th>
    );
  });

  // const tableRow = tableData.map((item, index) => {
  //   return (
  //     <tr key={index}>
  //       <td className="border border-gray-400">{index + 1}</td>
  //       <td className="border border-gray-400">{item.team}</td>
  //       <td className="border border-gray-400">{item.played}</td>
  //       <td className="border border-gray-400">{item.win}</td>
  //       <td className="border border-gray-400">{item.draw}</td>
  //       <td className="border border-gray-400">{item.lost}</td>
  //       <td className="border border-gray-400">{item.points}</td>
  //     </tr>
  //   );
  // });

  return (
    <div className="pb-6">
      <table className="text-center border border-gray-400 p-1">
        <thead className="text-xs">
          <tr className="bg-gray-200">{tableHeader}</tr>
        </thead>
        <tbody className="text-xs"></tbody>
      </table>
    </div>
  );
}
