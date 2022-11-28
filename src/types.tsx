export interface AllMatches {
  team: string;
  pointsScored: number;
  matchId: number;
}

export interface TeamScores {
  team: string;
  played: number;
  win: number;
  draw: number;
  lost: number;
  points: number;
}

export interface MatchResults {
  matchId: number;
  results: {
    team1: TeamScores;
    team2: TeamScores;
  };
}

export interface TeamState {
  teams: string[];
  allMatches: AllMatches[];
  matchResults: MatchResults[];
}
