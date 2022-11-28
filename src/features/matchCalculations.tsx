import { AllMatches } from "../store/teamSlice";

export function Team1Won(id: number, match: AllMatches[]) {
  const result = {
    matchId: id,
    results: {
      team1: {
        team: match[0].team,
        played: 1,
        win: 1,
        draw: 0,
        lost: 0,
        points: 3,
      },
      team2: {
        team: match[1].team,
        played: 1,
        win: 0,
        draw: 0,
        lost: 1,
        points: 0,
      },
    },
  };
  return result;
}

export function Draw(id: number, match: AllMatches[]) {
  const result = {
    matchId: id,
    results: {
      team1: {
        team: match[0].team,
        played: 1,
        win: 0,
        draw: 1,
        lost: 0,
        points: 1,
      },
      team2: {
        team: match[1].team,
        played: 1,
        win: 0,
        draw: 1,
        lost: 0,
        points: 1,
      },
    },
  };
  return result;
}

export function Team2Won(id: number, match: AllMatches[]) {
  const result = {
    matchId: id,
    results: {
      team1: {
        team: match[0].team,
        played: 1,
        win: 0,
        draw: 0,
        lost: 1,
        points: 0,
      },
      team2: {
        team: match[1].team,
        played: 1,
        win: 1,
        draw: 0,
        lost: 0,
        points: 3,
      },
    },
  };
  return result;
}
