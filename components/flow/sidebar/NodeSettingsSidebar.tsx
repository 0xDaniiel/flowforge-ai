"use client";

import React from "react";
import { useFlowStore } from "@/stores/flowStore";
import NodeEditor from "@/components/NodeEditor";
import { Node } from "reactflow";

const NodeSettingsSidebar: React.FC = () => {
  const nodes = useFlowStore((state) => state.nodes);
  const selectedNodeId = useFlowStore((state) => state.selectedNodeId);
  const setNodes = useFlowStore((state) => state.setNodes);

  const selectedNode: Node | null =
    nodes.find((n) => n.id === selectedNodeId) || null;

  return (
    <div className="w-full md:w-80 border-l border-gray-200 h-full">
      <NodeEditor
        selectedNode={selectedNode}
        setNodes={setNodes}
        nodes={nodes}
      />
    </div>
  );
};

export default NodeSettingsSidebar;
