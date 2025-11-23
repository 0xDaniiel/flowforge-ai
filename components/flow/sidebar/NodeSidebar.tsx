"use client";

import React from "react";
import { useFlowStore } from "@/stores/flowStore";

const NodeSidebar: React.FC = () => {
  const nodeTypes = [
    { type: "fetch", label: "Fetch Node" },
    { type: "ai", label: "AI Node" },
    { type: "decision", label: "Decision Node" },
  ];

  // ✅ Define the simulation function here
  const runSimulation = () => {
    const { nodes, edges, setNodes } = useFlowStore.getState();

    const updatedNodes = nodes.map((node) => {
      switch (node.type) {
        case "fetch":
          return {
            ...node,
            data: { ...node.data, value: `Fetched from ${node.data.apiUrl}` },
          };
        case "ai":
          return {
            ...node,
            data: {
              ...node.data,
              value: `AI output for "${node.data.prompt}"`,
            },
          };
        case "decision":
          return {
            ...node,
            data: {
              ...node.data,
              value: node.data.condition ? "True branch" : "False branch",
            },
          };
        default:
          return node;
      }
    });

    setNodes(updatedNodes);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Nodes</h2>

      {nodeTypes.map((node) => (
        <div
          key={node.type}
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData("application/reactflow", node.type);
            event.dataTransfer.effectAllowed = "move";
          }}
          className={`cursor-grab w-full mb-2 px-2 py-1 rounded ${
            node.type === "fetch"
              ? "bg-blue-500 text-white"
              : node.type === "ai"
              ? "bg-green-500 text-white"
              : "bg-yellow-400 text-black"
          }`}
        >
          {node.label}
        </div>
      ))}

      {/* Run Simulation Button */}
      <button
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        onClick={runSimulation} // ✅ call it here
      >
        Run Simulation
      </button>
    </div>
  );
};

export default NodeSidebar;
