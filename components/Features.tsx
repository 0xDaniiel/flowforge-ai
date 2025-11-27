"use client";

import React from "react";
import {
  AiOutlineDrag,
  AiOutlineNodeIndex,
  AiOutlineRobot,
} from "react-icons/ai";
import { motion, Variants } from "framer-motion";

const featuresData = [
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

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80 },
  },
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why FlowForge AI?
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center space-y-4"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-700 max-w-xs">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
