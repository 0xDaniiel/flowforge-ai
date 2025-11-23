"use client";

import React from "react";
import FlowCanvas from "@/components/flow/canvas/FlowCanvas";
import NodeSidebar from "@/components/flow/sidebar/NodeSidebar";

const EditorPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Sidebar */}
      <div className="w-full md:w-60 border-b md:border-b-0 md:border-r border-gray-200 p-4">
        <NodeSidebar />
      </div>

      {/* Main Canvas */}
      <div className="flex-1 bg-gray-50">
        <FlowCanvas />
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-60 border-t md:border-t-0 md:border-l border-gray-200 p-4">
        <h2 className="text-lg font-bold">Node Settings</h2>
        {/* Node settings will go here */}
      </div>
    </div>
  );
};

export default EditorPage;
