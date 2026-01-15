"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useCases } from "@/data/data";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 80 },
  },
};

export default function UseCases() {
  return (
    <section className="py-20 px-6 bg-white border-t border-black text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What You Can Build
      </h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {useCases.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center space-y-4 text-center"
          >
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
