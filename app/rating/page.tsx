"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";

export default function RatingPage() {
  const [activePet, setActivePet] = React.useState<"dog" | "cat" | null>(null);
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === 0) {
      setStatus({ type: "error", message: "Please select a star rating." });
      return;
    }
    
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      petName: formData.get("petName"),
      comment: formData.get("comment"),
      rating: rating,
    };

    try {
      // For PawPuff, we keep it client-side/local for this demo as no backend is setup
      // Simulation of a brief delay
      await new Promise(resolve => setTimeout(resolve, 800));

      // --- Save to Local Storage for immediate UI update ---
      const existingRatings = JSON.parse(localStorage.getItem("pawpuff_ratings") || "[]");
      const newRating = {
        name: data.name,
        pet: `${data.petName} (${activePet === "dog" ? "Dog" : "Cat"})`,
        text: data.comment,
        rating: data.rating,
        type: activePet || "mixed"
      };
      localStorage.setItem("pawpuff_ratings", JSON.stringify([newRating, ...existingRatings]));

      setStatus({ type: "success", message: "Thank you for your elite feedback!" });
      setRating(0);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus({ type: "error", message: "Submission failed." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* 
        CINEMATIC GLOBAL BACKGROUND 
        - High-resolution happy well-groomed pets imagery.
      */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* Theme-Aware Fallback Layer */}
        <div className="absolute inset-0 bg-[#F9F7F2] dark:bg-[#0A192F] transition-colors duration-700" /> 
        
        {/* Rating Page Specific Background */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-60 transition-opacity duration-1000"
            style={{ backgroundImage: 'url("/images/rating_bg.png")' }}
          />
        </motion.div>
        
        {/* Theme-Aware Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b 
          from-transparent 
          via-[#F9F7F2]/60 dark:via-[#0A192F]/60 
          to-[#F9F7F2] dark:to-[#0A192F] 
          transition-colors duration-700 z-[2]" 
        />
      </div>

      <Navbar activePet={activePet} setActivePet={setActivePet} />

      <main className="pt-40 pb-32 px-8 relative">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0A192F]/60 dark:text-[#F9F7F2]/50 hover:text-[#C084FC] dark:hover:text-[#C084FC] transition-colors duration-300 mb-12 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#F9F7F2]/80 dark:bg-[#0A192F]/80 backdrop-blur-3xl p-12 md:p-20 rounded-[60px] shadow-2xl border border-[#0A192F]/10 dark:border-white/10"
          >
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-black text-[#0A192F] dark:text-[#F9F7F2] tracking-tighter mb-6 hover:text-[#C084FC] dark:hover:text-[#C084FC] transition-colors duration-300 cursor-default">
                Share Your <span>Experience</span>
              </h1>
              <p className="text-lg text-[#0A192F]/70 dark:text-[#F9F7F2]/70 font-medium leading-relaxed">
                Your feedback helps us maintain the gold standard of pet wellness.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Star Rating Section */}
              <div className="flex flex-col items-center gap-8 p-10 bg-[#0A192F]/5 dark:bg-[#F9F7F2]/[0.05] rounded-[40px] border border-[#C084FC]/40 group shadow-xl">
                <div className="flex flex-col items-center gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A192F]/60 dark:text-[#F9F7F2]/60">Excellence Scale</label>
                  <motion.p 
                    key={hover || rating}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      (hover || rating) >= 4 ? "text-[#C084FC]" : (hover || rating) === 3 ? "text-yellow-400" : (hover || rating) > 0 ? "text-red-400" : "text-[#0A192F]/20 dark:text-[#F9F7F2]/20"
                    }`}
                  >
                    {(hover || rating) === 5 ? "Exquisite Experience" : 
                     (hover || rating) === 4 ? "Refined Quality" :
                     (hover || rating) === 3 ? "Satisfactory" :
                     (hover || rating) === 2 ? "Could Be Better" :
                     (hover || rating) === 1 ? "Disappointing" : "Choose Your Level"}
                  </motion.p>
                </div>

                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const currentRating = hover || rating;
                    const isActive = star <= currentRating;
                    
                    // Progressive elite coloring
                    const starColor = currentRating === 5 ? "fill-purple-400 text-purple-400" : currentRating === 4 ? "fill-emerald-400 text-emerald-400" : currentRating === 3 ? "fill-yellow-400 text-yellow-400" : "fill-red-400 text-red-400";
                    const glowColor = currentRating === 5 ? "rgba(192,132,252,0.6)" : currentRating === 4 ? "rgba(16,185,129,0.5)" : currentRating === 3 ? "rgba(250,204,21,0.5)" : "rgba(248,113,113,0.5)";

                    return (
                      <motion.button
                        key={star}
                        type="button"
                        whileHover={{ scale: 1.25 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className="focus:outline-none"
                      >
                        <Star 
                          size={56} 
                          className={`transition-all duration-300 ${
                            isActive 
                              ? `${starColor} scale-110` 
                              : "text-[#0A192F]/20 dark:text-white/20"
                          }`} 
                          style={isActive ? { filter: `drop-shadow(0 0 20px ${glowColor})` } : {}}
                        />
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-3 group">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A192F]/60 dark:text-[#F9F7F2]/60 ml-2 group-focus-within:text-[#C084FC] transition-colors duration-300">Your Name</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="E.g. Alexander Noble" 
                    className="w-full bg-transparent border-b-2 border-[#0A192F]/20 dark:border-white/40 py-4 px-2 text-[#0A192F] dark:text-white focus:outline-none focus:border-[#C084FC] transition-all font-medium text-lg placeholder:text-navy/20 dark:placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-3 group">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A192F]/60 dark:text-[#F9F7F2]/60 ml-2 group-focus-within:text-[#C084FC] transition-colors duration-300">Pet's Name</label>
                  <input 
                    name="petName"
                    required
                    type="text" 
                    placeholder="E.g. Buster" 
                    className="w-full bg-transparent border-b-2 border-[#0A192F]/20 dark:border-white/40 py-4 px-2 text-[#0A192F] dark:text-white focus:outline-none focus:border-[#C084FC] transition-all font-medium text-lg placeholder:text-navy/20 dark:placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-3 group">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C084FC] ml-2 transition-colors duration-300">Pet Category</label>
                  <select 
                    name="petType"
                    required
                    className="w-full bg-transparent border-b-2 border-white/20 dark:border-white/40 py-4 px-2 text-[#0A192F] dark:text-white focus:outline-none focus:border-[#C084FC] transition-all font-bold text-lg appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#F9F7F2] dark:bg-[#0A192F]">Select Category</option>
                    <option value="dog" className="bg-[#F9F7F2] dark:bg-[#0A192F]">Dog</option>
                    <option value="cat" className="bg-[#F9F7F2] dark:bg-[#0A192F]">Cat</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3 group">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A192F]/60 dark:text-[#F9F7F2]/60 ml-2 group-focus-within:text-[#C084FC] transition-colors duration-300">Testimonial</label>
                <textarea 
                  name="comment"
                  required
                  placeholder="Tell us about the PawPuff difference..." 
                  rows={4}
                  className="w-full bg-[#0A192F]/[0.05] dark:bg-[#0A192F] border-2 border-[#0A192F]/10 dark:border-white/20 rounded-3xl py-8 px-10 text-[#0A192F] dark:text-white focus:outline-none focus:border-[#C084FC] transition-all font-medium text-lg resize-none placeholder:text-navy/20 dark:placeholder:text-white/20"
                ></textarea>
              </div>

              <div className="flex flex-col items-center gap-6">
                 {status && (
                    <motion.p 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`text-sm font-black uppercase tracking-widest ${status.type === "success" ? "text-emerald-500" : "text-red-500"}`}
                    >
                      {status.message}
                    </motion.p>
                 )}
                 <motion.button
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -5, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-7 px-12 bg-[#C084FC] text-white font-bold uppercase tracking-widest text-[11px] rounded-[32px] shadow-2xl flex items-center justify-center gap-5 group disabled:opacity-50 transition-all duration-500"
                 >
                    {isSubmitting ? "Submitting..." : "Submit feedback"} <Send size={16} className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                 </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer activePet={activePet} setActivePet={setActivePet as any} />
    </div>
  );
}
