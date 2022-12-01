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
  matchId?: number;
}

export interface MatchResults {
  team1: TeamScores;
  team2: TeamScores;
}

export interface TeamState {
  teams: string[];
  pairedTeams: string[][];
  allMatches: AllMatches[];
  matchResults: TeamScores[];
}
