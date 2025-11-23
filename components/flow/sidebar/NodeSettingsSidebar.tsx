"use client";

import React from "react";
import { useFlowStore } from "@/stores/flowStore";

const NodeSettingsSidebar: React.FC = () => {
  const nodes = useFlowStore((state) => state.nodes);
  const setNodes = useFlowStore((state) => state.setNodes);
  const selectedNodeId = useFlowStore((state) => state.selectedNodeId);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  if (!selectedNode) {
    return (
      <div className="w-full md:w-60 border-t md:border-t-0 md:border-l border-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">Node Settings</h2>
        <p className="text-gray-500">Select a node to edit its properties</p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-60 border-t md:border-t-0 md:border-l border-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4">Node Settings</h2>

      {/* Label (common to all nodes) */}
      <label className="font-medium">Label:</label>
      <input
        type="text"
        value={selectedNode.data.label}
        onChange={(e) =>
          setNodes(
            nodes.map((n) =>
              n.id === selectedNode.id
                ? { ...n, data: { ...n.data, label: e.target.value } }
                : n
            )
          )
        }
        className="border px-2 py-1 rounded mb-2"
      />

      {/* Fetch Node */}
      {selectedNode.type === "fetch" && (
        <>
          <label className="font-medium">API URL:</label>
          <input
            type="text"
            value={selectedNode.data.apiUrl || ""}
            onChange={(e) =>
              setNodes(
                nodes.map((n) =>
                  n.id === selectedNode.id
                    ? { ...n, data: { ...n.data, apiUrl: e.target.value } }
                    : n
                )
              )
            }
            className="border px-2 py-1 rounded mb-2"
          />
        </>
      )}

      {/* AI Node */}
      {selectedNode.type === "ai" && (
        <>
          <label className="font-medium">Prompt:</label>
          <input
            type="text"
            value={selectedNode.data.prompt || ""}
            onChange={(e) =>
              setNodes(
                nodes.map((n) =>
                  n.id === selectedNode.id
                    ? { ...n, data: { ...n.data, prompt: e.target.value } }
                    : n
                )
              )
            }
            className="border px-2 py-1 rounded mb-2"
          />
        </>
      )}

      {selectedNode.type === "decision" && (
        <>
          <label className="font-medium">Condition:</label>
          <input
            type="text"
            value={selectedNode.data.condition || ""}
            onChange={(e) =>
              setNodes(
                nodes.map((n) =>
                  n.id === selectedNode.id
                    ? { ...n, data: { ...n.data, condition: e.target.value } }
                    : n
                )
              )
            }
            className="border px-2 py-1 rounded mb-2"
          />
        </>
      )}
    </div>
  );
};

export default NodeSettingsSidebar;
