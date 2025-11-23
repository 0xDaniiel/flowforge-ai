"use client";

import React, { useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "default",
    position: { x: 100, y: 100 },
    data: { label: "Start Node" },
  },
];

const initialEdges: Edge[] = [];

const FlowCanvas: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = (changes: any) =>
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        ...changes.find((c: any) => c.id === node.id),
      }))
    );
  const onEdgesChange = (changes: any) =>
    setEdges((eds) =>
      eds.map((edge) => ({
        ...edge,
        ...changes.find((c: any) => c.id === edge.id),
      }))
    );
  const onConnect = (connection: any) =>
    setEdges((eds) => addEdge(connection, eds));

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;
