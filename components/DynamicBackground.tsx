"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DynamicBackgroundProps {
  activePet: "dog" | "cat";
}

const PET_IMAGES = {
  dog: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2024&auto=format&fit=crop", // Distinct Golden Retriever
  cat: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop" // Distinct Ginger Cat
};

export default function DynamicBackground({ activePet }: DynamicBackgroundProps) {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activePet}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-[center_top_20%] bg-no-repeat transition-transform duration-[2000ms] group-hover:scale-105"
            style={{ backgroundImage: `url(${PET_IMAGES[activePet]})` }}
          />
          {/* Warm Theme-Aware Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/98" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
