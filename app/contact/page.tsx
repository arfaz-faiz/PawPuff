"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { motion } from "framer-motion";
import { Mail, Phone, Send, ArrowLeft } from "lucide-react";
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
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    
    const sheetData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      timestamp: timestamp
    };

    const emailData = {
      ...sheetData,
      _subject: `New PawPuff Inquiry from ${formData.get("name")}`,
      _captcha: "false"
    };

    try {
      // Send to Google Sheets via SheetDB
      const sheetResponse = await fetch("https://sheetdb.io/api/v1/s0fn7wvp4siuw", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: sheetData }),
      });

      // Also send email notification (non-blocking)
      fetch("https://formsubmit.co/ajax/hello@pawpuff.in", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(emailData),
      }).catch(() => {}); // Silently fail email if it doesn't work

      if (sheetResponse.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Sheet submission failed");
      }
    } catch (error) {
      // Fallback to WhatsApp
      const waText = `Hello PawPuff!\n\nName: ${sheetData.name}\nEmail: ${sheetData.email}\nInterest: ${sheetData.subject}\nMessage: ${sheetData.message}`;
      window.open(`https://wa.me/919035692226?text=${encodeURIComponent(waText)}`, "_blank");
      setStatus({ type: "success", message: "Redirecting to WhatsApp..." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] dark:bg-[#0A192F] relative overflow-hidden transition-colors duration-700">

      <Navbar activePet={activePet} setActivePet={setActivePet} />
      
      <main className="pt-48 pb-40 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-[#0A192F]/60 dark:text-[#F9F7F2]/50 hover:text-[#C084FC] dark:hover:text-[#C084FC] transition-all duration-300 mb-16 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-6xl font-black text-[#0A192F] dark:text-white tracking-[-0.02em] mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-[#0A192F]/70 dark:text-white/70 max-w-xl mx-auto">
                Have questions about our services? We'd love to hear from you.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              {[
                { 
                  icon: Mail, 
                  title: "Email", 
                  value: "hello@pawpuff.in",
                  href: "mailto:hello@pawpuff.in"
                },
                { 
                  icon: Phone, 
                  title: "WhatsApp", 
                  value: "+91 90356 92226",
                  href: "https://wa.me/919035692226?text=Hello"
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
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 group transition-all duration-300 hover:border-purple-400/50 hover:shadow-lg"
                >
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-400 group-hover:text-white text-purple-500 dark:text-purple-400">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#0A192F]/50 dark:text-white/50 mb-1">{item.title}</h3>
                    <p className="text-lg font-bold text-[#0A192F] dark:text-white">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/60 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 p-8 md:p-12 rounded-3xl"
              >
                <div className="flex justify-between items-end mb-10">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-black text-[#0A192F] dark:text-white mb-1">Send a Message</h2>
                    <p className="text-sm text-[#0A192F]/60 dark:text-white/60">We'll get back to you soon</p>
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
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#0A192F]/70 dark:text-white/70">Your Name</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-xl py-3 px-4 text-[#0A192F] dark:text-white placeholder:text-[#0A192F]/30 dark:placeholder:text-white/30 focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#0A192F]/70 dark:text-white/70">Email</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-xl py-3 px-4 text-[#0A192F] dark:text-white placeholder:text-[#0A192F]/30 dark:placeholder:text-white/30 focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0A192F]/70 dark:text-white/70">Service Interest</label>
                    <select name="subject" className="w-full bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-xl py-3 px-4 text-[#0A192F] dark:text-white focus:outline-none focus:border-purple-400 transition-colors cursor-pointer">
                      <option className="bg-white dark:bg-[#0A192F]">Grooming Subscription</option>
                      <option className="bg-white dark:bg-[#0A192F]">One-Time Grooming</option>
                      <option className="bg-white dark:bg-[#0A192F]">General Inquiry</option>
                      <option className="bg-white dark:bg-[#0A192F]">Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0A192F]/70 dark:text-white/70">Message</label>
                    <textarea 
                      required
                      name="message"
                      placeholder="Tell us about your pet and how we can help..." 
                      rows={4}
                      className="w-full bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-xl py-3 px-4 text-[#0A192F] dark:text-white placeholder:text-[#0A192F]/30 dark:placeholder:text-white/30 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 px-8 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold text-sm flex items-center justify-center gap-3 disabled:opacity-50 transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} 
                    <Send size={16} />
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
