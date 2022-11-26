import React from "react";

export function TeamInput() {
  return (
    <div className="p-2">
      <input
        className="border border-gray-400 rounded mr-2 px-3 py-1"
        type="text"
        placeholder="New team"
        value={""}
        onChange={() => console.log("onChange")}
      />
      <button
        className="border border-gray-400 rounded bg-gray-200 px-6 py-1"
        onClick={() => console.log("onClick")}
      >
        Add
      </button>
    </div>
  );
}
