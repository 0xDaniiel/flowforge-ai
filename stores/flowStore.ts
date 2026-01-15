import { create } from "zustand";
import { FlowState } from "@/types/flowStoreTypes";

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

      set({ highlightedNodeId: node.id });

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (node.type === "decision") {
        const condition = node.data.condition || "";
        let result = false;

        try {
          result = eval(condition.replace("value", node.data.value || 0));
        } catch (err) {
          console.warn("Error evaluating condition", condition);
        }

        currentNodeId = result ? node.data.trueOutput : node.data.falseOutput;
      } else {
        currentNodeId = node.data.nextNode;
      }
    }

    set({ highlightedNodeId: null, running: false });
  },
}));
