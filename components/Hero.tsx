"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Star, Home, CheckCircle } from "lucide-react";
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
          The <span className="animate-gradient-text">Ultimate</span> <br/>
          Canine Care
        </>
      ),
      description: "Bespoke grooming rituals and specialized wellness treatments designed exclusively for the distinguished dog."
    },
    cat: {
      title: (
        <>
          The <span className="animate-gradient-text">Elite</span> <br/>
          Feline Sanctuary
        </>
      ),
      description: "Exquisite grooming and stress-free sanctuary experiences tailored for the sophisticated and discerning cat."
    },
    default: {
      title: (
        <>
          Where <span className="animate-gradient-text">Luxury</span> <br/>
          meets Loyalty
        </>
      ),
      description: "At PawPuff, we believe that the extraordinary bond shared with a pet deserves nothing less than the absolute best. A dedication to honoring the deep, unconditional loyalty of our furry companions."
    }
  };

  const currentContext = contextData[activePet || "default"];

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-12 pb-32 overflow-visible">
      {/* Background overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/20 transition-colors duration-1000" />
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            activePet === "dog" ? "bg-purple-500/5" : activePet === "cat" ? "bg-purple-500/5" : "bg-transparent"
          }`}
        />
      </div>

      <div className="relative z-10 text-center px-8 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative badge */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-purple-500/50 hidden md:block" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm"
            >
              <Sparkles size={12} className="text-purple-400" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
                {activePet ? `Exclusive for ${activePet}s` : "Premium Pet Care"}
              </span>
              <Sparkles size={12} className="text-purple-400" />
            </motion.div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-purple-500/50 hidden md:block" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activePet || "default"}-${theme}`}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="font-display text-5xl md:text-8xl font-black text-[#0A192F] dark:text-white tracking-[-0.03em] leading-[1.05] mb-8 drop-shadow-2xl">
                {currentContext.title}
              </h1>
              
              <p className="text-base md:text-xl text-[#0A192F]/60 dark:text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-medium tracking-wide">
                {currentContext.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Primary CTA */}
            <a
                href="https://api.whatsapp.com/send/?phone=919035692226&text=Hello&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-4 bg-purple-500 text-white font-bold tracking-wider text-sm py-5 px-10 rounded-full shadow-[0_20px_50px_rgba(168,85,247,0.35)] transition-all duration-300 min-w-[220px] overflow-hidden hover:scale-105 hover:shadow-[0_25px_60px_rgba(168,85,247,0.5)] active:scale-[0.98] animate-pulse-glow"
            >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 animate-shimmer" />
                
                <span className="relative z-10">Book Now</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </a>

            {/* Secondary CTA */}
            <Link
                href="#pricing"
                className="group flex items-center gap-3 text-[#0A192F]/70 dark:text-white/70 font-semibold text-sm py-4 px-8 rounded-full border-2 border-[#0A192F]/10 dark:border-white/10 hover:border-purple-500/50 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300"
            >
                <span>View Services</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">Available Now</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Star size={16} className="text-amber-500 fill-amber-500" />
              <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">4.8 Rating</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              <Home size={16} className="text-purple-500" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">Home Service</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
