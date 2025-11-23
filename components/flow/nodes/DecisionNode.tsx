import React from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { GitBranch } from "lucide-react";

const DecisionNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div className="bg-yellow-400 text-black p-3 rounded shadow-lg min-w-[120px]">
      <div className="flex items-center gap-2">
        <GitBranch size={16} />
        <span>{data.label}</span>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default DecisionNode;
