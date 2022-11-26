import React from "react";

export function ScoreTable() {
  return (
    <div className="pb-6">
      <table className="text-center border border-gray-400 p-1">
        <thead className="text-xs">
          <tr className="bg-gray-200">
            <th className="px-2 sm:px-4 font-semibold border border-gray-400">
              Place
            </th>
            <th className="px-2 sm:px-4 font-semibold border border-gray-400">
              Team
            </th>
            <th className="px-2 sm:px-4 font-semibold border border-gray-400">
              Played
            </th>
            <th className="px-2 sm:px-4 font-semibold border border-gray-400">
              Win
            </th>
            <th className="px-2 sm:px-4 font-semibold border border-gray-400">
              Draw
            </th>
            <th className="px-2 sm:px-4 font-semibold border border-gray-400">
              Lost
            </th>
            <th className="px-2 sm:px-4 font-semibold border border-gray-400">
              Points
            </th>
          </tr>
        </thead>
        <tbody className="text-xs">
          <tr>
            <td className="border border-gray-400">1</td>
            <td className="border border-gray-400">Greece</td>
            <td className="border border-gray-400">2</td>
            <td className="border border-gray-400">2</td>
            <td className="border border-gray-400">0</td>
            <td className="border border-gray-400">0</td>
            <td className="border border-gray-400">6</td>
          </tr>
          <tr>
            <td className="border border-gray-400">1</td>
            <td className="border border-gray-400">Greece</td>
            <td className="border border-gray-400">2</td>
            <td className="border border-gray-400">2</td>
            <td className="border border-gray-400">0</td>
            <td className="border border-gray-400">0</td>
            <td className="border border-gray-400">6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
