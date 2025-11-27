"use client";

import React from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { GitBranch } from "lucide-react";
import { useFlowStore } from "@/stores/flowStore";

const DecisionNode: React.FC<NodeProps> = ({ data, id }) => {
  const highlightedNodeId = useFlowStore((state) => state.highlightedNodeId);

  return (
    <div
      style={{
        border:
          id === highlightedNodeId ? "2px solid #4F46E5" : "1px solid #ccc",
      }}
      className="bg-yellow-400 text-black p-3 rounded shadow-lg min-w-[140px]"
    >
      <div className="flex items-center gap-2">
        <GitBranch size={16} />
        <span>{data.label}</span>
      </div>

      {data.value && (
        <div className="mt-1 text-sm font-medium">{data.value}</div>
      )}

      <Handle type="target" position={Position.Top} />

      <Handle
        type="source"
        position={Position.Bottom}
        id="true"
        style={{ background: "green" }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="false"
        style={{ background: "red", left: 50 }}
      />
    </div>
  );
};

export default DecisionNode;
