import { TeamScores } from "../types";

export function ScoreTableCalculations(allMatchResults: TeamScores[]) {
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
  return tableData;
}
