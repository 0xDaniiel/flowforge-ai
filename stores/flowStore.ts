import { create } from "zustand";
import { FlowState } from "@/types/flowStoreTypes";

export const useFlowStore = create<FlowState>((set, get) => ({
  // ======================
  // State
  // ======================
  nodes: [],
  edges: [],
  selectedNodeId: null,
  running: false,
  highlightedNodeId: null,

  // ======================
  // Basic setters
  // ======================
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  setRunning: (running) => set({ running }),
  setHighlightedNodeId: (id) => set({ highlightedNodeId: id }),

  // ======================
  // Flow Simulation Engine (EDGE-BASED)
  // ======================
  simulateFlow: async (startNodeId: string) => {
    let currentNodeId: string | undefined = startNodeId;

    set({ running: true });

    while (currentNodeId) {
      const { nodes, edges } = get(); // ✅ always read fresh state
      const node = nodes.find((n) => n.id === currentNodeId);
      if (!node) break;

      // Highlight active node
      set({ highlightedNodeId: node.id });

      // Visual delay (step-by-step)
      await new Promise((resolve) => setTimeout(resolve, 500));

      // ======================
      // Decision Node
      // ======================
      if (node.type === "decision") {
        const condition = node.data.condition || "";
        let result = false;

        try {
          result = eval(
            condition.replace("value", String(node.data.value ?? 0)),
          );
        } catch {
          console.warn("Invalid decision condition:", condition);
        }

        // Follow labeled edge: "true" or "false"
        const nextEdge = edges.find(
          (e) =>
            e.source === node.id && e.label === (result ? "true" : "false"),
        );

        currentNodeId = nextEdge?.target;
      } else {
        // ======================
        // Normal Node
        // ======================
        const nextEdge = edges.find((e) => e.source === node.id);
        currentNodeId = nextEdge?.target;
      }
    }

    // Cleanup
    set({
      highlightedNodeId: null,
      running: false,
    });
  },
}));
