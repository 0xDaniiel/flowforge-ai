import { create } from "zustand";
import { Node, Edge } from "reactflow";

interface NodeData {
  label: string;
  apiUrl?: string;
  prompt?: string;
  condition?: string;
  value?: any;
  nextNode?: string; // for normal nodes
  trueOutput?: string; // for decision nodes
  falseOutput?: string; // for decision nodes
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
  simulateFlow: (startNodeId: string) => Promise<void>;
}

export const useFlowStore = create<FlowState>((set, get) => ({
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

  simulateFlow: async (startNodeId: string) => {
    const { nodes } = get();
    let currentNodeId: string | undefined = startNodeId;

    set({ running: true });

    while (currentNodeId) {
      const node = nodes.find((n) => n.id === currentNodeId);
      if (!node) break;

      // Highlight the current node
      set({ highlightedNodeId: node.id });

      // ✅ Pause for visualization
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Determine next node
      if (node.type === "decision") {
        const condition = node.data.condition || "";
        let result = false;

        try {
          // Simple evaluation like "value > 10"
          // eslint-disable-next-line no-eval
          result = eval(condition.replace("value", node.data.value || 0));
        } catch (err) {
          console.warn("Error evaluating condition", condition);
        }

        currentNodeId = result ? node.data.trueOutput : node.data.falseOutput;
      } else {
        currentNodeId = node.data.nextNode;
      }
    }

    // Done running
    set({ highlightedNodeId: null, running: false });
  },
}));
