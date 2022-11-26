export interface RowData {
  teamId: number;
  team: string;
  played: number;
  win: number;
  draw: number;
  lost: number;
  points: number;
  isHomeTeam?: boolean;
}

export type TableData = RowData[];
