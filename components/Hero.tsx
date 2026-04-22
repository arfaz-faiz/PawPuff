"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PawPrint } from "lucide-react";
import Link from "next/link";

import { useTheme } from "next-themes";

interface HeroProps {
  activePet: "dog" | "cat" | null;
}

export default function Hero({ activePet }: HeroProps) {
  const { theme } = useTheme();
  const contextData = {
    dog: {
      title: (
        <>
          The <span className="cursor-default hover:text-purple-400 transition-colors duration-500">Ultimate</span> <br/>
          Canine Care
        </>
      ),
      description: "Bespoke grooming rituals and specialized wellness treatments designed exclusively for the distinguished dog."
    },
    cat: {
      title: (
        <>
          The <span className="cursor-default hover:text-purple-400 transition-colors duration-500">Elite</span> <br/>
          Feline Sanctuary
        </>
      ),
      description: "Exquisite grooming and stress-free sanctuary experiences tailored for the sophisticated and discerning cat."
    },
    default: {
      title: (
        <>
          "Where Luxury <br/>
          meets Loyalty"
        </>
      ),
      description: "At PawPuff, we believe that the extraordinary bond shared with a pet deserves nothing less than the absolute best. We didn’t create a brand; we built a dedication—a commitment to honoring the deep, unconditional loyalty of our furry companions by providing them with products and services defined by uncompromising luxury and quality."
    }
  };

  const currentContext = contextData[activePet || "default"];

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-12 pb-32 overflow-visible">
      {/* Unified Global Background integration */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Hero-only Overlay for text contrast */}
        <div className="absolute inset-0 bg-navy/20 transition-colors duration-1000" />
        
        {/* Pet-Specific Wash Overlay (Subtle) */}
        <motion.div 
          key={activePet || "none"}
          className={`absolute inset-0 transition-colors duration-1000 ${
            activePet === "dog" ? "bg-purple-500/5" : activePet === "cat" ? "bg-purple-500/5" : "bg-transparent"
          }`}
        />
      </div>

      <div className="relative z-10 text-center px-8 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[2px] w-12 bg-purple-500/30 hidden md:block" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-[#0A192F]/80 dark:text-white/80">
              {activePet ? `Exclusive for ${activePet}s` : "Welcome to PawPuff"}
            </span>
            <div className="h-[2px] w-12 bg-purple-500/30 hidden md:block" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activePet || "default"}-${theme}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 
                className="hover:text-purple-400 text-4xl md:text-7xl font-black text-[#0A192F] dark:text-white tracking-tighter leading-tight mb-8 drop-shadow-2xl transition-colors duration-500 cursor-default"
              >
                {currentContext.title}
              </h1>
              
              <p 
                className="hover:text-purple-400 text-base md:text-lg text-[#0A192F]/70 dark:text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-medium transition-colors duration-500 cursor-default"
              >
                {currentContext.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
                href="https://api.whatsapp.com/send/?phone=919035392226&text=Hello+Pawpuff%2C+I+would+like+to+book+an+appointment+for+my+pet&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-6 bg-purple-500 text-navy font-bold tracking-widest text-sm py-8 px-16 rounded-full shadow-[0_20px_50px_rgba(168,85,247,0.4)] transition-all duration-300 min-w-[280px] overflow-hidden hover:scale-105 hover:bg-purple-400 hover:shadow-[0_30px_60px_rgba(168,85,247,0.5)] active:scale-95"
            >
                {/* Shimmer Effect - CSS only */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20" />

                <span className="relative z-10">Book Now</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-3 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
