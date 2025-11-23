import { create } from "zustand";
import { Node, Edge } from "reactflow";

// Define custom node data for type-specific properties
interface NodeData {
  label: string;
  apiUrl?: string; // Fetch Node
  prompt?: string; // AI Node
  condition?: string; // Decision Node
  value?: any; // runtime data for simulation
}

interface FlowState {
  nodes: Node<NodeData>[]; // typed nodes
  edges: Edge[];
  selectedNodeId: string | null;
  setNodes: (nodes: Node<NodeData>[]) => void;
  setEdges: (edges: Edge[]) => void;
  setSelectedNodeId: (id: string | null) => void;
}

export const useFlowStore = create<FlowState>((set) => ({
  nodes: [],
  edges: [],
  selectedNodeId: null,
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
}));
