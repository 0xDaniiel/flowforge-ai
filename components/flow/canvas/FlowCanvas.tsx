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

  // Highlight style
  const nodeStyle = (node: Node) => ({
    border:
      node.id === highlightedNodeId ? "2px solid #4F46E5" : "1px solid #ccc",
    padding: "8px",
    borderRadius: "6px",
    background: "#fff",
  });

  // Initialize Start Node only on first load
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

  // When a node is clicked → show editor
  const onNodeClick = (_: React.MouseEvent, node: Node) => {
    setSelectedNodeId(node.id);
  };

  // Handle drag-drop nodes from sidebar
  const onDropNode = (event: React.DragEvent) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("application/reactflow");
    if (!type) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const position = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };

    const id = (nodes.length + 1).toString();

    const newNode: Node = {
      id,
      type,
      position,
      data: {
        label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node`,
        apiUrl: "",
        prompt: "",
        condition: false,
      },
    };

    setNodes([...nodes, newNode]);
  };

  return (
    <div
      className="w-full h-full"
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDropNode}
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
