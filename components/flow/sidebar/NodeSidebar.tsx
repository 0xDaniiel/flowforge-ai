"use client";

import React from "react";
import { useFlowStore } from "@/stores/flowStore";

const NodeSidebar: React.FC = () => {
  const nodeTypes = [
    { type: "fetch", label: "Fetch Node" },
    { type: "ai", label: "AI Node" },
    { type: "decision", label: "Decision Node" },
  ];

  // Step-by-step simulation function
  const runStepByStepSimulation = async () => {
    const { nodes, edges, setNodes, setRunning, setHighlightedNodeId } =
      useFlowStore.getState();
    setRunning(true);

    // Start nodes with no incoming edges
    const startNodes = nodes.filter(
      (node) => !edges.some((e) => e.target === node.id)
    );

    const processed = new Set<string>();

    const executeNode = async (node: (typeof nodes)[0]) => {
      if (processed.has(node.id)) return;
      processed.add(node.id);

      // Highlight this node
      setHighlightedNodeId(node.id);

      // Assign value based on node type
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

      // Wait for visual effect
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Execute child nodes
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

  // Get currently highlighted node for visual feedback
  const highlightedNodeId = useFlowStore((state) => state.highlightedNodeId);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Nodes</h2>

      {/* Draggable nodes */}
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
          } ${
            highlightedNodeId === node.type
              ? "ring-2 ring-indigo-500 animate-pulse"
              : ""
          }`}
        >
          {node.label}
        </div>
      ))}

      {/* Run Simulation Button */}
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
