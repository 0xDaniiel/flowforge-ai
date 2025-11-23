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
  nodes: Node<NodeData>[];
  edges: Edge[];
  selectedNodeId: string | null;
  running: boolean; // tracks simulation running
  highlightedNodeId: string | null; // tracks currently executing node
  setNodes: (nodes: Node<NodeData>[]) => void;
  setEdges: (edges: Edge[]) => void;
  setSelectedNodeId: (id: string | null) => void;
  setRunning: (running: boolean) => void;
  setHighlightedNodeId: (id: string | null) => void; // setter
}

export const useFlowStore = create<FlowState>((set) => ({
  nodes: [],
  edges: [],
  selectedNodeId: null,
  running: false,
  highlightedNodeId: null,
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  setRunning: (running) => set({ running }),
  setHighlightedNodeId: (id) => set({ highlightedNodeId: id }),
}));
