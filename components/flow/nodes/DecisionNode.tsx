"use client";

import React from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { GitBranch } from "lucide-react";
import { useFlowStore } from "@/stores/flowStore";

const DecisionNode: React.FC<NodeProps> = ({ data, id }) => {
  const highlightedNodeId = useFlowStore((state) => state.highlightedNodeId);

  return (
    <div
      className={`p-3 rounded shadow-lg min-w-40 bg-yellow-400 text-black ${
        id === highlightedNodeId
          ? "border-2 border-indigo-600"
          : "border border-gray-400"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 font-semibold">
        <GitBranch size={16} />
        <span>{data.label || "Decision"}</span>
      </div>

      {/* Condition */}
      {data.condition && (
        <div className="mt-2 text-xs bg-yellow-300 rounded px-2 py-1">
          if <strong>{data.condition}</strong>
        </div>
      )}

      {/* Value */}
      {data.value !== undefined && (
        <div className="mt-1 text-xs">
          value: <strong>{String(data.value)}</strong>
        </div>
      )}

      {/* Incoming */}
      <Handle type="target" position={Position.Top} />

      {/* TRUE path */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="true"
        style={{ background: "green", left: "25%" }}
      />
      <span className="absolute -bottom-4 left-[18%] text-xs text-green-700">
        TRUE
      </span>

      {/* FALSE path */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="false"
        style={{ background: "red", left: "75%" }}
      />
      <span className="absolute -bottom-4 left-[65%] text-xs text-red-700">
        FALSE
      </span>
    </div>
  );
};

export default DecisionNode;
