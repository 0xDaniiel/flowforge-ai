"use client";

import React from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { Cpu } from "lucide-react";
import { useFlowStore } from "@/stores/flowStore";

const AINode: React.FC<NodeProps> = ({ id, data }) => {
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
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center gap-2">
        <Cpu size={16} />
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

export default AINode;
