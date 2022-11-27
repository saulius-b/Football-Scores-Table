export interface RowData {
  team: string;
  played: number;
  win: number;
  draw: number;
  lost: number;
  points: number;
}

export type TableData = RowData[];
