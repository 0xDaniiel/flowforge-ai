"use client";

import React from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { Database } from "lucide-react";

const FetchNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div className="bg-blue-500 text-white p-3 rounded shadow-lg min-w-[120px]">
      <div className="flex items-center gap-2">
        <Database size={16} />
        <span>{data.label}</span>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default FetchNode;
