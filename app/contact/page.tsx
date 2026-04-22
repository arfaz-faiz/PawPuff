"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [activePet, setActivePet] = React.useState<"dog" | "cat" | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      _subject: `New PawPuff Inquiry from ${formData.get("name")}`,
      _captcha: "false"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@pawpuff.in", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok || result.success) {
        setStatus({ type: "success", message: "Inquiry sent successfully!" });
        (e.target as HTMLFormElement).reset();
      } else {
        const waText = `Hello PawPuff!\n\nName: ${data.name}\nEmail: ${data.email}\nInterest: ${data.subject}\nMessage: ${data.message}`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(waText)}`, "_blank");
        setStatus({ type: "success", message: "Redirecting to WhatsApp..." });
      }
    } catch (error) {
      const waText = `Hello PawPuff!\n\nName: ${formData.get("name")}\nInterest: ${formData.get("subject")}\nMessage: ${formData.get("message")}`;
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(waText)}`, "_blank");
      setStatus({ type: "success", message: "Redirecting to WhatsApp..." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* 
        CINEMATIC GLOBAL BACKGROUND 
        - High-resolution luxury concierge background.
      */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* Theme-Aware Fallback Layer */}
        <div className="absolute inset-0 bg-[#F9F7F2] dark:bg-[#0A192F] transition-colors duration-700" /> 
        
        {/* Contact Page Specific Background */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-60 transition-opacity duration-1000"
            style={{ backgroundImage: 'url("/images/contact_bg.png")' }}
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
      
      <main className="pt-48 pb-40 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-[#0A192F]/60 dark:text-[#F9F7F2]/50 hover:text-[#C084FC] dark:hover:text-[#C084FC] transition-all duration-300 mb-16 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back to Home
          </Link>

          {/* Elite Header */}
          <div className="relative mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 text-[140px] md:text-[220px] font-serif font-black text-[#0A192F]/[0.02] dark:text-white/[0.01] select-none whitespace-nowrap"
            >
              Concierge
            </motion.div>
            
            <div className="text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-4xl md:text-7xl font-black text-[#0A192F] dark:text-[#F9F7F2] tracking-tighter leading-tight mb-8 hover:text-[#C084FC] dark:hover:text-[#C084FC] transition-colors duration-300 cursor-default">
                  The <span>Elite</span> Experience
                </h1>
                <p className="text-lg md:text-xl text-[#0A192F]/70 dark:text-[#F9F7F2]/70 max-w-2xl mx-auto leading-relaxed font-medium hover:text-[#0A192F] dark:hover:text-[#F9F7F2] transition-colors duration-300">
                  Experience a new standard of pet wellness. Our team is dedicated to curating bespoke care for the extraordinary.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              {[
                { 
                  icon: Mail, 
                  title: "Correspondence", 
                  value: "hello@pawpuff.in",
                  href: "mailto:hello@pawpuff.in"
                },
                { 
                  icon: Phone, 
                  title: "Concierge Line", 
                  value: "+91 98765 43210",
                  href: "https://wa.me/919876543210"
                },
                { 
                  icon: MapPin, 
                  title: "Location", 
                  value: "Jayanagar, Bengaluru, Karnataka",
                  href: "https://maps.google.com/?q=Jayanagar+Bengaluru+Karnataka"
                }
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.02, x: 15 }}
                  className="flex items-center gap-8 p-8 rounded-[40px] bg-[#F9F7F2]/60 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-[#F9F7F2]/10 shadow-xl backdrop-blur-2xl group transition-all duration-500 hover:border-[#C084FC]/60"
                >
                  <div className="w-16 h-16 rounded-3xl bg-[#0A192F]/5 dark:bg-[#F9F7F2]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#C084FC] group-hover:text-white text-[#0A192F] dark:text-[#F9F7F2]">
                    <item.icon size={24} className="transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#0A192F]/50 dark:text-[#F9F7F2]/50 mb-2 group-hover:text-[#C084FC] transition-colors duration-300">{item.title}</h3>
                    <p className="text-xl font-bold text-[#0A192F] dark:text-[#F9F7F2] tracking-tight group-hover:text-[#0A192F] dark:group-hover:text-[#F9F7F2] transition-colors duration-300">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Inquire Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="bg-[#F9F7F2]/80 dark:bg-[#0A192F]/80 backdrop-blur-3xl border border-[#0A192F]/5 dark:border-white/5 p-16 rounded-[60px] shadow-2xl"
              >
                <div className="flex justify-between items-end mb-16">
                  <div>
                    <h2 className="text-4xl font-black text-[#0A192F] dark:text-[#F9F7F2] mb-2 hover:text-[#C084FC] dark:hover:text-[#C084FC] transition-colors duration-300 cursor-default">Private Inquiry</h2>
                    <p className="text-xs text-[#0A192F]/60 dark:text-[#F9F7F2]/60 font-bold uppercase tracking-widest">Global Concierge Desk</p>
                  </div>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`text-[10px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-2xl ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4 group">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A192F]/60 dark:text-[#F9F7F2]/60 group-focus-within:text-[#C084FC] transition-colors duration-300 ml-1">Client Name</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="e.g. Alexander Thorne" 
                        className="w-full bg-transparent border-b-2 border-[#0A192F]/20 dark:border-[#F9F7F2]/20 py-4 px-2 text-[#0A192F] dark:text-[#F9F7F2] placeholder:text-[#0A192F]/25 dark:placeholder:text-[#F9F7F2]/25 focus:outline-none focus:border-[#C084FC] transition-all duration-300 font-sans text-xl"
                      />
                    </div>
                    <div className="space-y-4 group">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A192F]/60 dark:text-[#F9F7F2]/60 group-focus-within:text-[#C084FC] transition-colors duration-300 ml-1">Digital ID (Email)</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="e.g. alex@luxury.com" 
                        className="w-full bg-transparent border-b-2 border-[#0A192F]/20 dark:border-[#F9F7F2]/20 py-4 px-2 text-[#0A192F] dark:text-[#F9F7F2] placeholder:text-[#0A192F]/25 dark:placeholder:text-[#F9F7F2]/25 focus:outline-none focus:border-[#C084FC] transition-all duration-300 font-sans text-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 group">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A192F]/60 dark:text-[#F9F7F2]/60 group-focus-within:text-[#C084FC] transition-colors duration-300 ml-1">Engagement Type</label>
                    <select name="subject" className="w-full bg-transparent border-b-2 border-[#0A192F]/20 dark:border-[#F9F7F2]/20 py-5 px-2 text-[#0A192F] dark:text-[#F9F7F2] focus:outline-none focus:border-[#C084FC] transition-all duration-300 font-bold text-lg cursor-pointer">
                      <option className="bg-[#F9F7F2] dark:bg-[#0A192F] text-navy dark:text-pearl">Bespoke Grooming Membership</option>
                      <option className="bg-[#F9F7F2] dark:bg-[#0A192F] text-navy dark:text-pearl">One-Time Signature Spa</option>
                      <option className="bg-[#F9F7F2] dark:bg-[#0A192F] text-navy dark:text-pearl">Residential Care Program</option>
                      <option className="bg-[#F9F7F2] dark:bg-[#0A192F] text-navy dark:text-pearl">Private Event Coverage</option>
                    </select>
                  </div>

                  <div className="space-y-4 group">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A192F]/60 dark:text-[#F9F7F2]/60 group-focus-within:text-[#C084FC] transition-colors duration-300 ml-1">Special Requirements</label>
                    <textarea 
                      required
                      name="message"
                      placeholder="Describe your pet's needs and your expectations..." 
                      rows={4}
                      className="w-full bg-[#0A192F]/5 dark:bg-[#F9F7F2]/[0.05] border border-[#0A192F]/10 dark:border-[#F9F7F2]/10 rounded-[32px] py-8 px-10 text-[#0A192F] dark:text-[#F9F7F2] placeholder:text-[#0A192F]/30 dark:placeholder:text-[#F9F7F2]/30 focus:outline-none focus:border-[#C084FC] focus:border-2 transition-all duration-300 font-medium text-lg resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-7 px-12 rounded-[32px] bg-[#C084FC] text-white font-bold uppercase tracking-widest text-[11px] shadow-2xl flex items-center justify-center gap-5 group disabled:opacity-50 transition-all duration-500"
                  >
                    {isSubmitting ? "Processing Inquiry..." : "Submit Formal Inquiry"} 
                    <Send size={16} className={`transition-transform duration-500 group-hover:translate-x-3 group-hover:-translate-y-3 ${isSubmitting ? "animate-pulse" : ""}`} />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer activePet={activePet} setActivePet={setActivePet as any} />
    </div>
  );
}
