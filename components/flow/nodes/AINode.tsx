import React from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { Cpu } from "lucide-react";

const AINode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div className="bg-green-500 text-white p-3 rounded shadow-lg min-w-[120px]">
      <div className="flex items-center gap-2">
        <Cpu size={16} />
        <span>{data.label}</span>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default AINode;
