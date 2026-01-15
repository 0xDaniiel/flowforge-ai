import { Node, Edge } from "reactflow";

export interface NodeData {
  label: string;
  apiUrl?: string;
  prompt?: string;
  condition?: string;
  value?: any;
  nextNode?: string;
  trueOutput?: string;
  falseOutput?: string;
}

export interface FlowState {
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
  simulateFlow: (startNodeId: string) => Promise<void>;
}
