"use client";

import React from "react";
import { Database, Cpu, GitBranch } from "lucide-react";
import { useFlowStore } from "@/stores/flowStore";

const NodeSidebar: React.FC = () => {
  const nodeTypes = [
    { type: "fetch", label: "Fetch Node", icon: <Database size={16} /> },
    { type: "ai", label: "AI Node", icon: <Cpu size={16} /> },
    {
      type: "decision",
      label: "Decision Node",
      icon: <GitBranch size={16} />,
    },
  ];

  // Step-by-step simulation logic
  const runStepByStepSimulation = async () => {
    const { nodes, edges, setNodes, setRunning, setHighlightedNodeId } =
      useFlowStore.getState();

    setRunning(true);

    const startNodes = nodes.filter(
      (node) => !edges.some((e) => e.target === node.id)
    );

    const processed = new Set<string>();

    const executeNode = async (node: (typeof nodes)[0]) => {
      if (processed.has(node.id)) return;
      processed.add(node.id);

      setHighlightedNodeId(node.id);

      let value = "";
      switch (node.type) {
        case "fetch":
          value = `Fetched from ${node.data.apiUrl}`;
          break;
        case "ai":
          value = `AI output for "${node.data.prompt}"`;
          break;
        case "decision":
          value = node.data.condition ? "True branch" : "False branch";
          break;
      }

      setNodes(
        nodes.map((n) =>
          n.id === node.id ? { ...n, data: { ...n.data, value } } : n
        )
      );

      await new Promise((resolve) => setTimeout(resolve, 500));

      const children = edges
        .filter((e) => e.source === node.id)
        .map((e) => nodes.find((n) => n.id === e.target))
        .filter(Boolean) as typeof nodes;

      for (const child of children) {
        await executeNode(child);
      }
    };

    for (const startNode of startNodes) {
      await executeNode(startNode);
    }

    setHighlightedNodeId(null);
    setRunning(false);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Nodes</h2>

      {/* Draggable Node */}
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

      {/* Run Simulation */}
      <button
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        onClick={runStepByStepSimulation}
      >
        Run Simulation
      </button>
    </div>
  );
};

export default NodeSidebar;
