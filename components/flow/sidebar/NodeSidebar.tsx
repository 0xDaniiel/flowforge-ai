"use client";

import React from "react";

const NodeSidebar: React.FC = () => {
  const nodeTypes = ["Fetch", "AI", "Decision"];

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Nodes</h2>
      {nodeTypes.map((type) => (
        <div
          key={type}
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData("application/reactflow", type);
            event.dataTransfer.effectAllowed = "move";
          }}
          className={`cursor-grab w-full mb-2 px-2 py-1 rounded ${
            type === "Fetch"
              ? "bg-blue-500 text-white"
              : type === "AI"
              ? "bg-green-500 text-white"
              : "bg-yellow-500 text-black"
          }`}
        >
          {type} Node
        </div>
      ))}
    </div>
  );
};

export default NodeSidebar;
