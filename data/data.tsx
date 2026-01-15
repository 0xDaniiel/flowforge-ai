import { Feature } from "@/types/dataTypes";

import {
  AiOutlineDrag,
  AiOutlineNodeIndex,
  AiOutlineRobot,
  AiOutlinePlusCircle,
  AiOutlineSwap,
  AiOutlinePlayCircle,
  AiOutlineExperiment,
  AiOutlineBranches,
  AiOutlineMessage,
} from "react-icons/ai";

export const featuresData: Feature[] = [
  {
    icon: <AiOutlineDrag className="text-6xl" />,
    title: "Drag-and-Drop Nodes",
    description:
      "Easily create workflows by dragging and connecting nodes without writing code.",
  },
  {
    icon: <AiOutlineNodeIndex className="text-6xl" />,
    title: "Visual Workflow Builder",
    description:
      "Organize AI processes clearly with a visual representation of all steps.",
  },
  {
    icon: <AiOutlineRobot className="text-6xl" />,
    title: "Real-Time AI Simulation",
    description:
      "Run and simulate your AI agent workflows instantly, seeing results in real time.",
  },
];

export const steps = [
  {
    icon: <AiOutlinePlusCircle className="text-6xl" />,
    title: "1. Add Nodes",
    description:
      "Add AI blocks like prompts, fetch requests, or logic nodes. Customize inputs for each node.",
  },
  {
    icon: <AiOutlineSwap className="text-6xl" />,
    title: "2. Connect Steps",
    description:
      "Visually link nodes to define execution flow and pass data between steps.",
  },
  {
    icon: <AiOutlinePlayCircle className="text-6xl" />,
    title: "3. Run & Test",
    description:
      "Simulate workflows in real time, check outputs, and refine steps instantly.",
  },
];

export const useCases = [
  {
    icon: <AiOutlineExperiment className="text-6xl text-black" />,
    title: "AI Research Agent",
    description:
      "Automate data collection, summarization, and multi-step reasoning tasks.",
  },
  {
    icon: <AiOutlineBranches className="text-6xl text-black" />,
    title: "Workflow Automation",
    description:
      "Combine fetch nodes, logic, and prompts to create end-to-end automated systems.",
  },
  {
    icon: <AiOutlineMessage className="text-6xl text-black" />,
    title: "Custom AI Chatbots",
    description:
      "Build specialized bots that combine external tools, APIs, and memory.",
  },
];
