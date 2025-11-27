"use client";

import React from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineSwap,
  AiOutlinePlayCircle,
} from "react-icons/ai";

const steps = [
  {
    icon: <AiOutlinePlusCircle className="text-6xl" />,
    title: "1. Add Nodes",
    description:
      "Start with basic AI blocks like prompts, fetch requests, or logic nodes.",
  },
  {
    icon: <AiOutlineSwap className="text-6xl" />,
    title: "2. Connect Steps",
    description:
      "Link your nodes visually to define how the AI workflow behaves.",
  },
  {
    icon: <AiOutlinePlayCircle className="text-6xl" />,
    title: "3. Run & Test",
    description:
      "Simulate the workflow in real time and refine your agent instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white border-t border-black text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-3 text-center"
          >
            {step.icon}
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
