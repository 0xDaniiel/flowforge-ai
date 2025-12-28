"use client";

import React from "react";
import { Node } from "reactflow";

interface NodeEditorProps {
  selectedNode: Node | null;
  setNodes: (nodes: Node[]) => void;
  nodes: Node[]; // ✅ pass nodes from parent
}

const NodeEditor: React.FC<NodeEditorProps> = ({ selectedNode, setNodes, nodes }) => {
  if (!selectedNode) {
    return (
      <div className="p-4 text-gray-500">
        Select a node to edit its settings
      </div>
    );
  }

  const updateNodeData = (field: string, value: any) => {
    if (!selectedNode) return;

    const updatedNodes = nodes.map((n) =>
      n.id === selectedNode.id
        ? { ...n, data: { ...n.data, [field]: value } }
        : n
    );

    setNodes(updatedNodes); // ✅ Zustand setter only takes value
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-bold text-lg mb-2">
        {selectedNode.data?.label || "Node"}
      </h2>

      {/* LABEL (Common for all nodes) */}
      <div>
        <label className="block text-sm font-semibold">Label</label>
        <input
          className="border p-2 w-full rounded"
          value={selectedNode.data?.label || ""}
          onChange={(e) => updateNodeData("label", e.target.value)}
        />
      </div>

      {/* FETCH NODE */}
      {selectedNode.type === "fetch" && (
        <>
          <div>
            <label className="block text-sm font-semibold">API URL</label>
            <input
              className="border p-2 w-full rounded"
              value={selectedNode.data?.apiUrl || ""}
              onChange={(e) => updateNodeData("apiUrl", e.target.value)}
              placeholder="https://api.example.com/users"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Method</label>
            <select
              className="border p-2 w-full rounded"
              value={selectedNode.data?.method || "GET"}
              onChange={(e) => updateNodeData("method", e.target.value)}
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
          </div>
        </>
      )}

      {/* AI NODE */}
      {selectedNode.type === "ai" && (
        <>
          <div>
            <label className="block text-sm font-semibold">Prompt</label>
            <textarea
              className="border p-2 w-full rounded"
              value={selectedNode.data?.prompt || ""}
              onChange={(e) => updateNodeData("prompt", e.target.value)}
              placeholder="Summarize this text..."
              rows={4}
            />
          </div>
        </>
      )}

      {/* DECISION NODE */}
      {selectedNode.type === "decision" && (
        <>
          <div>
            <label className="block text-sm font-semibold">Condition</label>
            <input
              className="border p-2 w-full rounded"
              value={selectedNode.data?.condition || ""}
              onChange={(e) => updateNodeData("condition", e.target.value)}
              placeholder="value > 10"
            />
          </div>

          <p className="text-xs text-gray-500">
            Example: <code>response.status === 200</code>
          </p>
        </>
      )}
    </div>
  );
};

export default NodeEditor;
