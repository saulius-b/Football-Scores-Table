import React from "react";
import { useSelector } from "react-redux";
import { TableData } from "../types";
import type { RootState } from "../store/store";

export function ScoreTable() {
  const tableData = useSelector((state: RootState) => state.addTeam.value);

  const headersText: string[] = [
    "Place",
    "Team",
    "Played",
    "Win",
    "Draw",
    "Lost",
    "Points",
  ];

  const tableHeader = headersText.map((item) => {
    return (
      <th className="px-2 sm:px-4 font-semibold border border-gray-400">
        {item}
      </th>
    );
  });

  const tableRow = tableData.map((item, index) => {
    return (
      <tr>
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
