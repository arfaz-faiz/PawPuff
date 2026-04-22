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
              <>
                {/* Pet background image with heavy edge blending */}
                <div 
                  className={`absolute inset-0 bg-no-repeat bg-center transition-all duration-1000 ${
                    activePet === "dog" ? "bg-[length:auto_85%] opacity-30" : "bg-[length:auto_70%] opacity-25"
                  }`}
                  style={{ 
                    backgroundImage: `url(${
                      activePet === "dog" 
                        ? "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop" 
                        : "/images/cat_bg_custom.png"
                    })`,
                    maskImage: 'radial-gradient(ellipse 60% 60% at center, black 20%, transparent 60%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at center, black 20%, transparent 60%)',
                    filter: 'blur(1px)'
                  }}
                />
                {/* Edge blur overlays - stronger for cat */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#F9F7F2] via-transparent to-[#F9F7F2] dark:from-[#0A192F] dark:via-transparent dark:to-[#0A192F] ${activePet === "cat" ? "opacity-90" : "opacity-80"}`} />
                <div className={`absolute inset-0 bg-gradient-to-r from-[#F9F7F2] via-transparent to-[#F9F7F2] dark:from-[#0A192F] dark:via-transparent dark:to-[#0A192F] ${activePet === "cat" ? "opacity-80" : "opacity-60"}`} />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {/* Ambient Flow Blobs - CSS animations for performance */}
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/15 dark:bg-purple-500/8 blur-[120px] animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] animate-blob animation-delay-2000" />

                {/* Main Logo - simplified animation */}
                <img
                  src="/images/logo.png"
                  alt="PawPuff Background"
                  className={`w-[550px] h-[550px] md:w-[700px] md:h-[700px] object-contain select-none pointer-events-none transition-all duration-700 animate-gentle-float drop-shadow-[0_0_60px_rgba(192,132,252,0.3)] ${
                    isFooterVisible ? 'opacity-0 scale-90' : activePet ? 'opacity-30' : 'opacity-50'
                  }`}
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
