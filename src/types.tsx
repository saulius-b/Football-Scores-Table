export interface RowData {
  place: number;
  team: string;
  played: number;
  win: number;
  draw: number;
  lost: number;
  points: number;
  isHomeTeam?: boolean;
}

export type TableData = RowData[];
