"use client";

import React from "react";
import { steps } from "@/data/data";
import { motion, Variants } from "framer-motion";

const stepVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 70 },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white border-t border-black text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={stepVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center space-y-3 text-center"
          >
            {step.icon}
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
