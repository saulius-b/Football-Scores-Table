import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { TeamScores } from "../types";

export function ScoreTable() {
  const allMatchResults = useSelector((state: RootState) => state.addTeam.matchResults);

  //Selecting only the teams that already have played in matches
  const teamsThatHavePlayed = [...Array.from(new Set(allMatchResults.map((item) => item.team)))];

  const sortedTeams: TeamScores[][] = [];

  teamsThatHavePlayed.forEach((team) => {
    sortedTeams.push(
      allMatchResults.filter((item) => {
        return item.team === team;
      })
    );
  });

  const tableData: TeamScores[] = [];

  sortedTeams.forEach((team) => {
    const teamResult: TeamScores = {
      team: team[0].team,
      played: Object.values(team).reduce((x, { played }) => x + played, 0),
      win: Object.values(team).reduce((x, { win }) => x + win, 0),
      draw: Object.values(team).reduce((x, { draw }) => x + draw, 0),
      lost: Object.values(team).reduce((x, { lost }) => x + lost, 0),
      points: Object.values(team).reduce((x, { points }) => x + points, 0),
    };
    tableData.push(teamResult);
  });

  tableData.sort((a, b) => {
    return b.points - a.points || a.team.localeCompare(b.team);
  });

  const headersText: string[] = ["Place", "Team", "Played", "Win", "Draw", "Lost", "Points"];

  const tableHeader = headersText.map((item, index) => {
    return (
      <th key={index} className="px-2 sm:px-4 font-semibold border border-gray-400">
        {item}
      </th>
    );
  });

  const tableRow = tableData.map((item, index) => {
    return (
      <tr key={index}>
        <td className="border border-gray-400">{index + 1}</td>
        <td className="border border-gray-400">{item.team}</td>
        <td className="border border-gray-400">{item.played}</td>
        <td className="border border-gray-400">{item.win}</td>
        <td className="border border-gray-400">{item.draw}</td>
        <td className="border border-gray-400">{item.lost}</td>
        <td className="border border-gray-400">{item.points}</td>
      </tr>
    );
  });

  return (
    <div className="pb-6">
      <table className="text-center border border-gray-400 p-1">
        <thead className="text-xs">
          <tr className="bg-gray-200">{tableHeader}</tr>
        </thead>
        <tbody className="text-xs">{tableRow}</tbody>
      </table>
    </div>
  );
}
