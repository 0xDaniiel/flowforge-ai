"use client";

import React from "react";
import FlowCanvas from "@/components/flow/canvas/FlowCanvas";
import NodeSidebar from "@/components/flow/sidebar/NodeSidebar";
import { useFlowStore } from "@/stores/flowStore";
import NodeSettingsSidebar from "@/components/flow/sidebar/NodeSettingsSidebar";

const EditorPage: React.FC = () => {
  const nodes = useFlowStore((state) => state.nodes);
  const setNodes = useFlowStore((state) => state.setNodes);
  const selectedNodeId = useFlowStore((state) => state.selectedNodeId);
  const setSelectedNodeId = useFlowStore((state) => state.setSelectedNodeId);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Sidebar */}
      <div className="w-full md:w-60 border-b md:border-b-0 md:border-r border-gray-200 p-4">
        <NodeSidebar />
      </div>

      {/* Main Canvas */}
      <div className="flex-1 bg-gray-50">
        <FlowCanvas setSelectedNodeId={setSelectedNodeId} />
      </div>

      {/* Right Sidebar */}
      <NodeSettingsSidebar />
    </div>
  );
};

export default EditorPage;
