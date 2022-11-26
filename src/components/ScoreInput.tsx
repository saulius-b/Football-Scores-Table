import React from "react";

export function ScoreInput() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex">
        <div className="flex gap-4">
          <div>Team A</div>
          <input
            className="border border-gray-400 rounded w-6 text-center"
            type={"text"}
            onChange={() => {
              console.log("scoreInput onChange");
            }}
          ></input>
        </div>
        <div className="px-1">:</div>
        <div className="flex gap-4">
          <input
            className="border border-gray-400 rounded w-6 text-center"
            type={"text"}
            onChange={() => {
              console.log("scoreInput onChange");
            }}
          ></input>
          <div>Team B</div>
        </div>
      </div>
      <div className="flex">
        <div className="flex gap-4">
          <div>Team C</div>
          <input
            className="border border-gray-400 rounded w-6 text-center"
            type={"text"}
            onChange={() => {
              console.log("scoreInput onChange");
            }}
          ></input>
        </div>
        <div className="px-1">:</div>
        <div className="flex gap-4">
          <input
            className="border border-gray-400 rounded w-6 text-center"
            type={"text"}
            onChange={() => {
              console.log("scoreInput onChange");
            }}
          ></input>
          <div>Team D</div>
        </div>
      </div>
    </div>
  );
}
