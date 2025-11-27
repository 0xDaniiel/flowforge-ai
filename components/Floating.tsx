"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingInProps {
  children: ReactNode;
  delay?: number;
}

export default function FloatingIn({ children, delay = 0 }: FloatingInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 80 }}
    >
      {children}
    </motion.div>
  );
}
