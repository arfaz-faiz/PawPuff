"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ChevronDown, Store, Info, Scissors, PawPrint, Star, MessageSquare, Send, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { PRICING } from "@/constants/pricing";

interface NavbarProps {
  activePet: "dog" | "cat" | null;
  setActivePet: (pet: "dog" | "cat" | null) => void;
  activeTab?: "alaCarte" | "subscriptions";
  setActiveTab?: (tab: "alaCarte" | "subscriptions") => void;
  lastClickedPricingComponent?: "pet" | "service" | null;
  setLastClickedPricingComponent?: (comp: "pet" | "service") => void;
  isHoveringService?: boolean;
  activeSection?: string;
}


export default function Navbar({ 
  activePet, 
  setActivePet, 
  activeTab,
  setActiveTab,
  lastClickedPricingComponent, 
  setLastClickedPricingComponent,
  isHoveringService,
  activeSection = "" 
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [petTypesOpen, setPetTypesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopPetTypesOpen, setDesktopPetTypesOpen] = useState(false);
  const [nestedAlaCarteOpen, setNestedAlaCarteOpen] = useState(false);
  const [nestedSubscriptionsOpen, setNestedSubscriptionsOpen] = useState(false);
  const pathname = usePathname();


  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants: Variants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const overlayVariants: Variants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-4 md:px-12 py-3 md:py-4 bg-navy/80 backdrop-blur-xl border-b border-white/[0.03]">
        <Link
          href="/"
          onClick={() => {
            setActivePet(null);
            setIsOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <img 
            src="/images/logo.png" 
            alt="PawPuff Logo"
            className="h-24 w-auto object-contain transition-all duration-300 animate-gentle-float drop-shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]" 
          />
        </Link>

        <div className="flex-1 flex items-center justify-end gap-5">
          {/* Desktop Dropdown Links */}
          <div className="hidden md:flex items-center gap-5 mr-4">
            
            {/* Pet Types Dropdown */}
            <div className="relative">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setDesktopPetTypesOpen(!desktopPetTypesOpen);
                    setDesktopServicesOpen(false);
                  }}
                  className={`cursor-pointer text-[10px] font-bold tracking-wider transition-all flex items-center gap-2 py-2 px-6 rounded-full border-2 backdrop-blur-xl shadow-lg group ${
                    activeSection === "pricing" && lastClickedPricingComponent === "pet"
                    ? "bg-purple-400 text-[#0A192F] border-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.8)]"
                    : "bg-white/40 dark:bg-white/20 border-white/50 dark:border-white/30 text-[#0A192F] dark:text-white hover:bg-white/60 dark:hover:bg-white/30 active:bg-purple-300 active:text-[#0A192F] active:border-purple-300"
                  }`}
                >
                  <PawPrint size={14} className={`transition-colors ${activeSection === "pricing" && lastClickedPricingComponent === "pet" ? "text-[#0A192F]" : "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300"}`} /> Pet Types <ChevronDown size={12} className={`transition-transform duration-300 ${desktopPetTypesOpen ? 'rotate-180' : ''}`} />
                </motion.button>
              
              <AnimatePresence>
                {desktopPetTypesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[60]"
                  >
                    <div className="bg-black border-2 border-white/20 p-5 min-w-[220px] flex flex-col gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-[24px] backdrop-blur-3xl">
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={() => { setActivePet(activePet === "dog" ? null : "dog"); setDesktopPetTypesOpen(false); setLastClickedPricingComponent?.("pet"); }}
                        className={`cursor-pointer group relative flex items-center justify-between w-full py-2.5 px-4 rounded-xl transition-all duration-300 ${
                          activePet === "dog" ? "bg-purple-400 text-[#0A192F] shadow-[0_0_20px_rgba(168,85,247,0.4)]" : "bg-white/10 hover:bg-purple-300 hover:text-[#0A192F] text-white"
                        }`}
                      >
                        <span className="text-[10px] font-bold tracking-widest uppercase">Dog Mode</span>
                      </motion.button>
                      <motion.button 
                        whileTap={{ scale: 0.97 }}
                        onClick={() => { setActivePet(activePet === "cat" ? null : "cat"); setDesktopPetTypesOpen(false); setLastClickedPricingComponent?.("pet"); }}
                        className={`cursor-pointer group relative flex items-center justify-between w-full py-2.5 px-4 rounded-xl transition-all duration-300 ${
                          activePet === "cat" ? "bg-purple-400 text-[#0A192F] shadow-[0_0_20px_rgba(168,85,247,0.4)]" : "bg-white/10 hover:bg-purple-300 hover:text-[#0A192F] text-white"
                        }`}
                      >
                        <span className="text-[10px] font-bold tracking-widest uppercase">Cat Mode</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setDesktopServicesOpen(!desktopServicesOpen);
                  setDesktopPetTypesOpen(false);
                }}
                className={`cursor-pointer text-[10px] font-bold tracking-wider transition-all flex items-center gap-2 py-2 px-6 rounded-full border-2 backdrop-blur-xl shadow-lg group ${
                  isHoveringService || (activeSection === "pricing" && lastClickedPricingComponent !== "pet")
                  ? "bg-purple-400 text-[#0A192F] border-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.8)]" 
                  : "bg-white/40 dark:bg-white/20 border-white/50 dark:border-white/30 text-[#0A192F] dark:text-white hover:bg-white/60 dark:hover:bg-white/30 active:bg-purple-300 active:text-[#0A192F] active:border-purple-300"
                }`}
              >
                <Scissors size={14} className={`transition-colors ${isHoveringService || (activeSection === "pricing" && lastClickedPricingComponent !== "pet") ? "text-[#0A192F]" : "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300"}`} /> Services <ChevronDown size={12} className={`transition-transform duration-300 ${desktopServicesOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[60]"
                  >
                    <div className="bg-black border-2 border-white/20 p-5 min-w-[240px] flex flex-col gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-[24px] backdrop-blur-3xl">
                      {/* Ala Carte Nested Menu */}
                      <div 
                        className="relative"
                        onMouseEnter={() => setNestedAlaCarteOpen(true)}
                        onMouseLeave={() => setNestedAlaCarteOpen(false)}
                      >
                        <button 
                          className={`group flex items-center justify-between w-full py-2.5 px-4 rounded-xl transition-all duration-300 ${nestedAlaCarteOpen ? 'bg-purple-400 text-[#0A192F]' : 'bg-white/10 text-white hover:bg-purple-300 hover:text-[#0A192F]'}`}
                        >
                          <span className="text-[10px] font-bold tracking-widest uppercase">Ala Carte</span>
                          <ChevronRight size={12} className={`transition-transform duration-300 ${nestedAlaCarteOpen ? 'translate-x-1' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {nestedAlaCarteOpen && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="absolute left-[105%] top-0 min-w-[220px] bg-black border-2 border-white/20 p-4 rounded-[20px] shadow-2xl flex flex-col gap-2"
                            >
                              {!activePet ? (
                                <div className="py-2 px-3 text-center">
                                  <p className="text-[8px] font-bold text-white uppercase tracking-wider">
                                    Select <span className="text-purple-400">Pet Type</span> First
                                  </p>
                                </div>
                              ) : (
                                PRICING[activePet].alaCarte.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/?tab=alaCarte#${service.id}`}
                                    onClick={() => { setDesktopServicesOpen(false); setActiveTab?.("alaCarte"); setLastClickedPricingComponent?.("service"); }}
                                    className="text-[9px] font-bold text-white/70 hover:text-purple-400 uppercase tracking-wider py-1.5 px-3 rounded-lg hover:bg-white/5 transition-all"
                                  >
                                    {service.name}
                                  </Link>
                                ))
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Subscriptions Nested Menu */}
                      <div 
                        className="relative"
                        onMouseEnter={() => setNestedSubscriptionsOpen(true)}
                        onMouseLeave={() => setNestedSubscriptionsOpen(false)}
                      >
                        <button 
                          className={`group flex items-center justify-between w-full py-2.5 px-4 rounded-xl transition-all duration-300 ${nestedSubscriptionsOpen ? 'bg-purple-400 text-[#0A192F]' : 'bg-white/10 text-white hover:bg-purple-300 hover:text-[#0A192F]'}`}
                        >
                          <span className="text-[10px] font-bold tracking-widest uppercase">Subscriptions</span>
                          <ChevronRight size={12} className={`transition-transform duration-300 ${nestedSubscriptionsOpen ? 'translate-x-1' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {nestedSubscriptionsOpen && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="absolute left-[105%] top-0 min-w-[220px] bg-black border-2 border-white/20 p-4 rounded-[20px] shadow-2xl flex flex-col gap-2"
                            >
                              {!activePet ? (
                                <div className="py-2 px-3 text-center">
                                  <p className="text-[8px] font-bold text-white uppercase tracking-wider">
                                    Select <span className="text-purple-400">Pet Type</span> First
                                  </p>
                                </div>
                              ) : (
                                PRICING[activePet].subscriptions.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/?tab=subscriptions#${service.id}`}
                                    onClick={() => { setDesktopServicesOpen(false); setActiveTab?.("subscriptions"); setLastClickedPricingComponent?.("service"); }}
                                    className="text-[9px] font-bold text-white/70 hover:text-purple-400 uppercase tracking-wider py-1.5 px-3 rounded-lg hover:bg-white/5 transition-all"
                                  >
                                    {service.name}
                                  </Link>
                                ))
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#ratings"
              className={`cursor-pointer text-[10px] font-bold tracking-wider transition-all flex items-center gap-2 py-2 px-6 rounded-full border-2 backdrop-blur-xl shadow-lg group ${
                activeSection === "ratings" && pathname === "/"
                ? "bg-purple-400 text-[#0A192F] border-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.8)]"
                : "bg-white/40 dark:bg-white/20 border-white/50 dark:border-white/30 text-[#0A192F] dark:text-white hover:bg-white/60 dark:hover:bg-white/30 active:bg-purple-300 active:text-[#0A192F] active:border-purple-300"
              }`}
            >
              <Star size={12} className={`transition-colors ${activeSection === "ratings" && pathname === "/" ? "text-[#0A192F]" : "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300"}`} /> Users Feedback
            </Link>

            <Link
              href="/rating"
              className={`cursor-pointer text-[10px] font-bold tracking-wider transition-all flex items-center gap-2 py-2 px-6 rounded-full border-2 backdrop-blur-xl shadow-lg group ${
                pathname === "/rating"
                ? "bg-purple-400 text-[#0A192F] border-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.8)]"
                : "bg-white/40 dark:bg-white/20 border-white/50 dark:border-white/30 text-[#0A192F] dark:text-white hover:bg-white/60 dark:hover:bg-white/30 active:bg-purple-300 active:text-[#0A192F] active:border-purple-300"
              }`}
            >
              <Send size={12} className={`transition-colors ${pathname === "/rating" ? "text-[#0A192F]" : "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300"}`} /> Share Review
            </Link>

            <Link
              href="/contact"
              className={`cursor-pointer text-[10px] font-bold tracking-wider transition-all flex items-center gap-2 py-2 px-6 rounded-full border-2 backdrop-blur-xl shadow-lg group ${
                pathname === "/contact"
                ? "bg-purple-400 text-[#0A192F] border-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.8)]"
                : "bg-white/40 dark:bg-white/20 border-white/50 dark:border-white/30 text-[#0A192F] dark:text-white hover:bg-white/60 dark:hover:bg-white/30 active:bg-purple-300 active:text-[#0A192F] active:border-purple-300"
              }`}
            >
              <MessageSquare size={14} className={`transition-colors ${pathname === "/contact" ? "text-[#0A192F]" : "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300"}`} /> Contact Us
            </Link>

            <Link
              href="/#about"
              className={`cursor-pointer text-[10px] font-bold tracking-wider transition-all flex items-center gap-2 py-2 px-6 rounded-full border-2 backdrop-blur-xl shadow-lg group ${
                activeSection === "about" && pathname === "/"
                ? "bg-purple-400 text-[#0A192F] border-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.8)]"
                : "bg-white/40 dark:bg-white/20 border-white/50 dark:border-white/30 text-[#0A192F] dark:text-white hover:bg-white/60 dark:hover:bg-white/30 active:bg-purple-300 active:text-[#0A192F] active:border-purple-300"
              }`}
            >
              <Info size={12} className={`transition-colors ${activeSection === "about" && pathname === "/" ? "text-[#0A192F]" : "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300"}`} /> About Us
            </Link>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-1 text-[#0A192F] dark:text-white hover:text-purple-400 transition-colors"
            aria-label="Toggle Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-sky-900/20 backdrop-blur-sm z-[60]"
          />
        )}
      </AnimatePresence>

      {/* Slide-out Sidebar */}
      <motion.aside
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed top-0 right-0 h-full w-full sm:w-[350px] bg-[#F9F7F2] dark:bg-[#0A192F] text-[#0A192F] dark:text-white z-[70] p-10 flex flex-col overflow-y-auto shadow-2xl border-l border-white/5"
      >
        <div className="flex justify-between items-center mb-20">
          <ThemeToggle />
          <Link href="/" onClick={toggleSidebar}>
            <motion.img 
              src="/images/logo.png" 
              alt="PawPuff Logo" 
              className="h-12 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
            />
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-1 text-[#0A192F] dark:text-white hover:text-purple-400 transition-colors"
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-8 pb-12">
          {/* Pet Types in Menu */}
          <div className="flex flex-col gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setPetTypesOpen(!petTypesOpen)}
              className="cursor-pointer group flex items-center justify-between w-full py-3 px-5 rounded-2xl transition-all duration-300 bg-white/50 dark:bg-white/20 border-2 border-white/60 dark:border-white/30 backdrop-blur-xl shadow-lg hover:bg-white/70 active:bg-purple-300 active:text-[#0A192F]"
            >
              <div className="flex items-center gap-3">
                <PawPrint size={14} className="text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 group-active:text-[#0A192F]" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Pet Types</span>
              </div>
              <ChevronDown size={14} className={`transition-transform duration-300 ${petTypesOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {petTypesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden flex flex-col pl-6 mt-3 space-y-3"
                >
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => { setActivePet(activePet === "dog" ? null : "dog"); toggleSidebar(); }}
                    className={`cursor-pointer group flex items-center justify-between w-full py-2.5 px-5 rounded-xl transition-all duration-300 backdrop-blur-xl ${activePet === "dog"
                      ? "bg-purple-400 text-[#0A192F] shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                      : "bg-[#0A192F]/5 dark:bg-white/10 border-2 border-white/20 dark:border-white/10 text-[#0A192F] dark:text-white hover:bg-purple-300 hover:text-[#0A192F]"
                      }`}
                  >
                    <span className="text-[10px] font-bold tracking-widest uppercase">For Dogs</span>
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => { setActivePet(activePet === "cat" ? null : "cat"); toggleSidebar(); }}
                    className={`cursor-pointer group flex items-center justify-between w-full py-2.5 px-5 rounded-xl transition-all duration-300 backdrop-blur-xl ${activePet === "cat"
                      ? "bg-purple-400 text-[#0A192F] shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                      : "bg-[#0A192F]/5 dark:bg-white/10 border-2 border-white/20 dark:border-white/10 text-[#0A192F] dark:text-white hover:bg-purple-300 hover:text-[#0A192F]"
                      }`}
                  >
                    <span className="text-[10px] font-bold tracking-widest uppercase">For Cats</span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div className="flex flex-col">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`cursor-pointer group flex items-center justify-between w-full py-3 px-5 rounded-2xl transition-all duration-300 backdrop-blur-xl shadow-lg border-2 ${
                activeSection === "pricing"
                ? "bg-purple-400 text-[#0A192F] border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.6)]"
                : "bg-white/50 dark:bg-white/20 border-white/60 dark:border-white/30 text-[#0A192F] dark:text-white hover:bg-white/70 active:bg-purple-300 active:text-[#0A192F]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Scissors size={14} className={`transition-transform duration-500 ${activeSection === "pricing" ? "text-[#0A192F]" : "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 group-active:text-[#0A192F]"}`} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Services</span>
              </div>
              <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden flex flex-col pl-6 mt-3 space-y-3"
                >
                  <Link
                    href="/?tab=alaCarte#pricing"
                    onClick={toggleSidebar}
                    className="group flex items-center justify-between w-full py-2.5 px-5 rounded-xl transition-all duration-300 bg-[#0A192F]/5 dark:bg-white/10 border-2 border-white/20 dark:border-white/10 text-[#0A192F] dark:text-white hover:bg-purple-300 hover:text-[#0A192F] backdrop-blur-xl"
                  >
                    <span className="text-[10px] font-bold tracking-widest uppercase">Ala Carte</span>
                  </Link>
                  <Link
                    href="/?tab=subscriptions#pricing"
                    onClick={toggleSidebar}
                    className="group flex items-center justify-between w-full py-2.5 px-5 rounded-xl transition-all duration-300 bg-[#0A192F]/5 dark:bg-white/10 border-2 border-white/20 dark:border-white/10 text-[#0A192F] dark:text-white hover:bg-purple-300 hover:text-[#0A192F] backdrop-blur-xl"
                  >
                    <span className="text-[10px] font-bold tracking-widest uppercase">Subscription</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/#ratings" 
            onClick={toggleSidebar}
            className={`cursor-pointer group flex items-center justify-between w-full py-3 px-5 rounded-2xl transition-all duration-300 backdrop-blur-xl shadow-lg border-2 ${
              activeSection === "ratings"
              ? "bg-purple-400 text-[#0A192F] border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.6)]"
              : "bg-white/50 dark:bg-white/20 border-white/60 dark:border-white/30 text-[#0A192F] dark:text-white hover:bg-white/70 active:bg-purple-300 active:text-[#0A192F]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Star size={14} className={`transition-colors ${activeSection === "ratings" ? "text-[#0A192F] fill-navy" : "fill-purple-600 dark:fill-purple-400 group-hover:fill-purple-700 dark:group-hover:fill-purple-300 group-active:fill-[#0A192F]"}`} />
              <span className="text-[10px] font-bold tracking-widest uppercase">Users Feedback</span>
            </div>
          </Link>

          <Link 
            href="/rating" 
            onClick={toggleSidebar}
            className={`cursor-pointer group flex items-center justify-between w-full py-3 px-5 rounded-2xl transition-all duration-300 backdrop-blur-xl shadow-lg border-2 ${
              pathname === "/rating"
              ? "bg-purple-400 text-[#0A192F] border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.6)]"
              : "bg-white/50 dark:bg-white/20 border-white/60 dark:border-white/30 text-[#0A192F] dark:text-white hover:bg-white/70 active:bg-purple-300 active:text-[#0A192F]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Send size={14} className={`transition-colors ${pathname === "/rating" ? "text-[#0A192F]" : "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 group-active:text-[#0A192F]"}`} />
              <span className="text-[10px] font-bold tracking-widest uppercase">Share Review</span>
            </div>
          </Link>


          <Link 
            href="/contact" 
            onClick={toggleSidebar}
            className={`cursor-pointer group flex items-center justify-between w-full py-3 px-5 rounded-2xl transition-all duration-300 backdrop-blur-xl shadow-lg border-2 ${
              pathname === "/contact"
              ? "bg-purple-400 text-[#0A192F] border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.6)]"
              : "bg-white/50 dark:bg-white/20 border-white/60 dark:border-white/30 text-[#0A192F] dark:text-white hover:bg-white/70 active:bg-purple-300 active:text-[#0A192F]"
            }`}
          >
            <div className="flex items-center gap-3">
              <MessageSquare size={14} className={`transition-colors ${pathname === "/contact" ? "text-[#0A192F]" : "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 group-active:text-[#0A192F]"}`} />
              <span className="text-[10px] font-bold tracking-widest uppercase">Contact Us</span>
            </div>
          </Link>

          <Link 
            href="/#about" 
            onClick={toggleSidebar}
            className={`cursor-pointer group flex items-center justify-between w-full py-3 px-5 rounded-2xl transition-all duration-300 backdrop-blur-xl shadow-lg border-2 ${
              activeSection === "about"
              ? "bg-purple-400 text-[#0A192F] border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.6)]"
              : "bg-white/50 dark:bg-white/20 border-white/60 dark:border-white/30 text-[#0A192F] dark:text-white hover:bg-white/70 active:bg-purple-300 active:text-[#0A192F]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Info size={14} className={`transition-colors ${activeSection === "about" ? "text-[#0A192F]" : "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 group-active:text-[#0A192F]"}`} />
              <span className="text-[10px] font-bold tracking-widest uppercase">About Us</span>
            </div>
          </Link>
        </div>

        <div className="mt-auto pt-12 border-t border-[#0A192F]/10 dark:border-white/10 flex flex-col gap-8">
          <p className="text-slate-400 text-[10px] italic tracking-widest font-black uppercase opacity-60">
            "Experience the best pet care in town."
          </p>
        </div>
      </motion.aside>
    </>
  );
}
