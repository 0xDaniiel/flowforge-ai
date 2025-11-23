"use client";

import React from "react";
import FlowCanvas from "@/components/flow/canvas/FlowCanvas";
import NodeSidebar from "@/components/flow/sidebar/NodeSidebar";
import { useFlowStore } from "@/stores/flowStore";

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
      <div className="w-full md:w-60 border-t md:border-t-0 md:border-l border-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">Node Settings</h2>
        {selectedNode ? (
          <div className="flex flex-col gap-2">
            <label className="font-medium">Label:</label>
            <input
              type="text"
              value={selectedNode.data.label}
              onChange={(e) =>
                setNodes(
                  nodes.map((n) =>
                    n.id === selectedNode.id
                      ? { ...n, data: { ...n.data, label: e.target.value } }
                      : n
                  )
                )
              }
              className="border px-2 py-1 rounded"
            />
          </div>
        ) : (
          <p className="text-gray-500">Select a node to edit its properties</p>
        )}
      </div>
    </div>
  );
};

export default EditorPage;
