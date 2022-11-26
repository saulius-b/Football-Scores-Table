import React from "react";
import { TableData } from "../types";

export function ScoreTable() {
  const tableData: TableData = [
    {
      place: 1,
      teamId: 1,
      team: "Greece",
      played: 1,
      win: 1,
      draw: 1,
      lost: 1,
      points: 1,
      isHomeTeam: true,
    },
    {
      place: 2,
      teamId: 2,
      team: "Lithuania",
      played: 2,
      win: 2,
      draw: 2,
      lost: 2,
      points: 2,
      isHomeTeam: true,
    },
  ];

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

  const tableRow = tableData.map((item) => {
    return (
      <tr>
        <td className="border border-gray-400">{item.place}</td>
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
