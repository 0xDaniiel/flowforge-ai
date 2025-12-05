1. **Project Setup**

   - Next.js project initialized.
   - TailwindCSS configured.
   - React Flow and Zustand installed.

2. **Folder & File Structure**

   - `components/flow/` with subfolders for `nodes/`, `canvas/`, `sidebar/`.
   - `stores/flowStore.ts` for global state.
   - `types/` folder set up for Node/Edge types.

3. **FlowCanvas**

   - Central canvas where nodes are dropped.
   - Handles node dragging, connecting edges, and selecting nodes.
   - Start node initialized automatically.
   - `MiniMap`, `Controls`, `Background` added.

4. **NodeSidebar (Left Sidebar)**

   - Drag-and-drop nodes: Fetch Node, AI Node, Decision Node.
   - Run simulation button implemented.
   - Step-by-step simulation logic added using Zustand store.

5. **Zustand Store (`flowStore.ts`)**

   - Tracks `nodes`, `edges`, `selectedNodeId`.
   - Added `running` and `highlightedNodeId` for simulation tracking.
   - Setters for all of the above.

6. **Custom Nodes**

   - `FetchNode` (with icon, target/source handles, styling).
   - `AINode` (with icon, target/source handles, styling).
   - Simulation updates `value` of nodes and highlights them during execution.

## **What’s Left (Next Steps)**

1. **DecisionNode Component**

   - Complete `DecisionNode` similar to Fetch/AI nodes.
   - Display `value` during simulation.
   - Add icon and proper styling.

2. **Right Sidebar (Node Settings)**

   - Shows properties of the selected node.
   - Allows editing things like `API URL`, `Prompt`, or `Condition`.
   - Updates the node data in Zustand store in real-time.

3. **Improved Simulation**

   - Optional: add animations or progress indicators.
   - Show active node clearly in canvas (highlighting already partially implemented).

4. **Styling & Responsiveness**

   - Ensure layout works on mobile and smaller screens.
   - Adjust canvas and sidebars to be fully responsive.

5. **Additional Features (Optional Enhancements)**

   - Save/load workflows.
   - Export workflow data or JSON.
   - Add more node types (e.g., Webhook, Timer, Custom AI calls).
   - Mini-stepper UI for running simulation one node at a time.

---
