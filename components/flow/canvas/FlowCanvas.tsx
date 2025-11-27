"use client";

import React from "react";
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MiniMap,
  Controls,
  Background,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  OnConnect,
} from "reactflow";
import "reactflow/dist/style.css";
import { useFlowStore } from "@/stores/flowStore";

import FetchNode from "@/components/flow/nodes/FetchNode";
import AINode from "@/components/flow/nodes/AINode";
import DecisionNode from "@/components/flow/nodes/DecisionNode";

// Node types
const nodeTypes = {
  fetch: FetchNode,
  ai: AINode,
  decision: DecisionNode,
};

interface FlowCanvasProps {
  setSelectedNodeId: (id: string | null) => void;
}

const FlowCanvas: React.FC<FlowCanvasProps> = ({ setSelectedNodeId }) => {
  const nodes = useFlowStore((state) => state.nodes);
  const edges = useFlowStore((state) => state.edges);
  const setNodes = useFlowStore((state) => state.setNodes);
  const setEdges = useFlowStore((state) => state.setEdges);
  const highlightedNodeId = useFlowStore((state) => state.highlightedNodeId);

  // Initialize Start Node
  React.useEffect(() => {
    if (nodes.length === 0) {
      setNodes([
        {
          id: "1",
          type: "default",
          position: { x: 100, y: 100 },
          data: { label: "Start Node" },
        },
      ]);
    }
  }, [nodes, setNodes]);

  const onNodesChange = (changes: NodeChange[]) => {
    setNodes(applyNodeChanges(changes, nodes));
  };

  const onEdgesChange = (changes: EdgeChange[]) => {
    setEdges(applyEdgeChanges(changes, edges));
  };

  const onConnect: OnConnect = (connection) => {
    setEdges(addEdge(connection, edges));
  };

  const onNodeClick = (_: React.MouseEvent, node: Node) => {
    setSelectedNodeId(node.id);
  };

  const nodeStyle = (node: Node) => ({
    border:
      node.id === highlightedNodeId ? "2px solid #4F46E5" : "1px solid #ccc",
    padding: "8px",
    borderRadius: "6px",
    background: "#fff",
  });

  return (
    <div
      className="w-full h-full"
      onDrop={(event) => {
        event.preventDefault();
        const type = event.dataTransfer.getData("application/reactflow");
        const reactFlowBounds = event.currentTarget.getBoundingClientRect();
        const position = {
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        };
        const id = (nodes.length + 1).toString();

        const newNode: Node = {
          id,
          type,
          position,
          data: {
            label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node`,
          },
        };

        setNodes([...nodes, newNode]);
      }}
    >
      <ReactFlow
        nodes={nodes.map((node) =>
          node.type === "default" ? { ...node, style: nodeStyle(node) } : node
        )}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
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
