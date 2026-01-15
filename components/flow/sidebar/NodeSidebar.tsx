"use client";

import React from "react";
import { Database, Cpu, GitBranch } from "lucide-react";
import { useFlowStore } from "@/stores/flowStore";

const nodeTypes = [
  { type: "fetch", label: "Fetch Node", icon: <Database size={16} /> },
  { type: "ai", label: "AI Node", icon: <Cpu size={16} /> },
  { type: "decision", label: "Decision Node", icon: <GitBranch size={16} /> },
];

const NodeSidebar: React.FC = () => {
  const simulateFlow = useFlowStore((state) => state.simulateFlow);
  const running = useFlowStore((state) => state.running);

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
          className={`cursor-grab w-full mb-2 px-2 py-1 rounded flex items-center gap-2
            ${
              node.type === "fetch"
                ? "bg-blue-500 text-white"
                : node.type === "ai"
                ? "bg-green-500 text-white"
                : "bg-yellow-400 text-black"
            }
          `}
        >
          {node.icon}
          <span>{node.label}</span>
        </div>
      ))}

      <button
        disabled={running}
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
        onClick={() => simulateFlow("1")}
      >
        {running ? "Running..." : "Run Flow"}
      </button>
    </div>
  );
};

export default NodeSidebar;
