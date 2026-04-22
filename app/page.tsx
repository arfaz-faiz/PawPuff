"use client";

import React, { useState, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { PricingGrid, Footer, Reviews } from "@/components/Sections";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activePet, setActivePet] = useState<"dog" | "cat" | null>(null);
  const [activeTab, setActiveTab] = useState<"alaCarte" | "subscriptions">("alaCarte");
  const [lastClickedPricingComponent, setLastClickedPricingComponent] = useState<"pet" | "service" | null>(null);
  const [isHoveringService, setIsHoveringService] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  React.useEffect(() => {
    // Stable check for footer visibility using IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of footer is visible
    );

    const aboutEl = document.getElementById("about");
    if (aboutEl) observer.observe(aboutEl);

    const handleScroll = () => {
      const sections = ["pricing", "ratings", "about"];
      let current = "";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (aboutEl) observer.unobserve(aboutEl);
    };
  }, []);

  return (
    <div className="scroll-smooth relative min-h-screen bg-transparent">
      {/* 
        GLOBAL DYNAMIC CINEMATIC BACKGROUND 
        - Restored to original luxury background as default.
        - Seamlessly transitions between Dog, Cat, and Default imagery.
      */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* Theme-Aware Fallback Layer */}
        <div className="absolute inset-0 bg-[#F9F7F2] dark:bg-[#0A192F] transition-colors duration-700" /> 
        
        {/* High Resolution Image Layer with smooth cross-fade */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activePet || "default"}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {activePet ? (
              <div 
                className="absolute inset-0 bg-no-repeat bg-center bg-[length:auto_85%] opacity-40 transition-all duration-1000"
                style={{ 
                  backgroundImage: `url(${
                    activePet === "dog" 
                      ? "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop" 
                      : "/images/cat_bg_custom.png"
                  })`
                }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {/* Ambient Flow Blobs */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    x: ["-10%", "10%", "-10%"],
                    y: ["-10%", "10%", "-10%"],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/20 dark:bg-purple-500/10 blur-[120px]"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    x: ["10%", "-10%", "10%"],
                    y: ["10%", "-10%", "10%"],
                  }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/15 dark:bg-blue-500/5 blur-[100px]"
                />

                {/* Main Logo with bobbing and slight rotation */}
                <motion.img
                  src="/images/logo.png"
                  alt="PawPuff Background"
                  animate={{
                    opacity: isFooterVisible ? 0 : (activePet === "dog" || activePet === "cat" ? 0.3 : 0.6),
                    scale: isFooterVisible ? 0.8 : [1, 1.03, 1],
                    y: [0, -30, 0],
                    rotate: [0, 2, -2, 0],
                    filter: [
                      "drop-shadow(0 0 50px rgba(192,132,252,0.25))",
                      "drop-shadow(0 0 100px rgba(192,132,252,0.5))",
                      "drop-shadow(0 0 50px rgba(192,132,252,0.25))"
                    ]
                  }}
                  className="w-[550px] h-[550px] md:w-[700px] md:h-[700px] object-contain select-none pointer-events-none"
                  transition={{
                    opacity: { duration: 0.8 },
                    scale: { duration: 0.8 },
                    y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    filter: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Theme-Aware Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b 
          from-transparent 
          via-[#F9F7F2]/60 dark:via-[#0A192F]/60 
          to-[#F9F7F2] dark:to-[#0A192F] 
          transition-colors duration-700 z-[2]" 
        />
      </div>

      <Navbar 
        activePet={activePet} 
        setActivePet={setActivePet} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lastClickedPricingComponent={lastClickedPricingComponent}
        setLastClickedPricingComponent={setLastClickedPricingComponent}
        isHoveringService={isHoveringService}
        activeSection={activeSection}
      />
      
      <main className="pt-24">
        <Hero activePet={activePet} />
        
        <div id="pricing">
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-pearl/20 uppercase tracking-[0.5em] font-black">Loading Pricing...</div>}>
            <PricingGrid 
          activePet={activePet} 
          setActivePet={setActivePet} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setLastClickedPricingComponent={setLastClickedPricingComponent}
          setIsHoveringService={setIsHoveringService}
        />
          </Suspense>
        </div>

        <Reviews activePet={activePet} />
        

        <div id="about">
          <Footer activePet={activePet} setActivePet={setActivePet} />
        </div>
      </main>
    </div>
  );
}
