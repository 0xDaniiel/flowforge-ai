import { create } from "zustand";
import { Node, Edge } from "reactflow";

interface NodeData {
  label: string;
  apiUrl?: string;
  prompt?: string;
  condition?: string;
  value?: any;
}

interface FlowState {
  nodes: Node<NodeData>[];
  edges: Edge[];
  selectedNodeId: string | null;
  running: boolean;
  highlightedNodeId: string | null;
  setNodes: (nodes: Node<NodeData>[]) => void;
  setEdges: (edges: Edge[]) => void;
  setSelectedNodeId: (id: string | null) => void;
  setRunning: (running: boolean) => void;
  setHighlightedNodeId: (id: string | null) => void;
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
