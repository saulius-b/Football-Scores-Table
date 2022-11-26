import { TableData } from "../types";
import * as Lodash from "lodash";

export function calculateScore(tableData: TableData) {
  const teamPairs = Lodash.chunk(tableData, 2);
  return teamPairs;
}
