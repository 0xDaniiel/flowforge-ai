"use client";

import React from "react";
import {
  AiOutlineExperiment,
  AiOutlineBranches,
  AiOutlineMessage,
} from "react-icons/ai";

const useCases = [
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

export default function UseCases() {
  return (
    <section className="py-20 px-6 bg-white border-t border-black text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What You Can Build
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {useCases.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 text-center"
          >
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
