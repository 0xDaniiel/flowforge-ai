"use client";

import React from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { useFlowStore } from "@/stores/flowStore";
import { Database } from "lucide-react";

interface FetchNodeData {
  label: string;
  apiUrl?: string;
  value?: string;
}

const FetchNode: React.FC<NodeProps<FetchNodeData>> = ({ id, data }) => {
  const highlightedNodeId = useFlowStore((state) => state.highlightedNodeId);

  return (
    <div
      style={{
        border:
          id === highlightedNodeId ? "2px solid #4F46E5" : "1px solid #ccc",
        padding: "8px",
        borderRadius: "6px",
        background: "#fff",
        minWidth: "120px",
      }}
    >
      <div className="flex items-center gap-2">
        <Database size={16} />
        <span>{data.label}</span>
      </div>
      {data.value && (
        <div className="mt-1 text-sm text-indigo-600">{data.value}</div>
      )}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default FetchNode;
