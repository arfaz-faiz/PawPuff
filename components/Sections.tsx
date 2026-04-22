"use client";

import React, { useState, useEffect } from "react";
import { PRICING } from "@/constants/pricing";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, CheckCircle2, PawPrint, Star, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SectionsProps {
  activePet: "dog" | "cat" | null;
  setActivePet: (pet: "dog" | "cat" | null) => void;
  activeTab?: "alaCarte" | "subscriptions";
  setActiveTab?: (tab: "alaCarte" | "subscriptions") => void;
  setLastClickedPricingComponent?: (component: "pet" | "service") => void;
  setIsHoveringService?: (hover: boolean) => void;
}


/* --- Pricing Grid Component --- */
export function PricingGrid({
  activePet,
  setActivePet,
  activeTab = "alaCarte",
  setActiveTab,
  setLastClickedPricingComponent,
  setIsHoveringService
}: SectionsProps) {
  const currentData = PRICING[activePet || "dog"][activeTab];

  return (
    <section id="pricing" className="py-24 px-8 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            whileHover={{ scale: 1.02 }}
            className="hover:text-purple-400 text-4xl md:text-5xl font-bold text-[#0A192F] dark:text-white mb-6 transition-colors duration-700 cursor-default"
          >
            Grooming <span>Services</span>
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
            {/* Pet Toggle */}
            <div className="flex bg-[#0A192F]/5 dark:bg-white/5 p-1 rounded-full border border-[#0A192F]/10 dark:border-white/10">
              <button
                onClick={() => { setActivePet("dog"); setLastClickedPricingComponent?.("pet"); }}
                className={`px-8 py-2 rounded-full transition-all ${activePet === "dog" ? "bg-purple-400 text-[#0A192F] font-bold" : "text-[#0A192F]/60 dark:text-white/60"
                  }`}
              >
                Dogs
              </button>
              <button
                onClick={() => { setActivePet("cat"); setLastClickedPricingComponent?.("pet"); }}
                className={`px-8 py-2 rounded-full transition-all ${activePet === "cat" ? "bg-purple-400 text-[#0A192F] font-bold" : "text-[#0A192F]/60 dark:text-white/60"
                  }`}
              >
                Cats
              </button>
            </div>

            {/* Plan Toggle */}
            <div className="flex bg-[#0A192F]/5 dark:bg-white/5 p-1 rounded-full border border-[#0A192F]/10 dark:border-white/10">
              <button
                onClick={() => { setActiveTab?.("alaCarte"); setLastClickedPricingComponent?.("service"); }}
                className={`px-8 py-2 rounded-full transition-all ${activeTab === "alaCarte" ? "bg-purple-400 text-[#0A192F] font-bold" : "text-[#0A192F]/60 dark:text-white/60"
                  }`}
              >
                Ala Carte
              </button>
              <button
                onClick={() => { setActiveTab?.("subscriptions"); setLastClickedPricingComponent?.("service"); }}
                className={`px-8 py-2 rounded-full transition-all ${activeTab === "subscriptions" ? "bg-purple-400 text-[#0A192F] font-bold" : "text-[#0A192F]/60 dark:text-white/60"
                  }`}
              >
                Subscriptions
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {currentData.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setIsHoveringService?.(true)}
              onMouseLeave={() => setIsHoveringService?.(false)}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-12 bg-[#0A192F]/5 dark:bg-white/5 backdrop-blur-xl border border-[#0A192F]/10 dark:border-white/10 hover:border-purple-500 group transition-all duration-500 max-w-sm w-full flex flex-col rounded-[45px] overflow-hidden scroll-mt-32"
            >
              <div className="flex flex-col items-start gap-6 h-full flex-1">
                {index === 1 && (
                  <span className="bg-purple-600 text-white text-[10px] font-semibold tracking-wider px-4 py-1 rounded-full">
                    Signature
                  </span>
                )}
                <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="hover:text-purple-400 text-2xl font-black text-[#0A192F] dark:text-white transition-colors duration-700 cursor-default"
                >
                  {item.name}
                </motion.h3>
                <div className="flex items-baseline gap-1">
                  <motion.span
                    whileHover={{ scale: 1.01 }}
                    className="hover:text-purple-400 text-3xl font-black text-[#0A192F] dark:text-white transition-colors duration-700 cursor-default"
                  >
                    ₹{item.price}
                  </motion.span>
                  <span className="text-[#0A192F]/60 dark:text-white/60 text-sm font-medium">/ session</span>
                </div>

                <ul className="space-y-5 mb-12 w-full">
                  {[
                    "Premium Organic Shampoo",
                    "Aromatherapy Session",
                    "Hand Blow-dry & Style",
                    "Nail Clipping & Filing",
                    "Paw Balm Treatment"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-[#0A192F]/60 dark:text-white/60 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400/40 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`https://api.whatsapp.com/send/?phone=919035392226&text=Hello+Pawpuff%2C+I+would+like+to+book+the+${item.name}+service+for+my+pet&type=phone_number&app_absent=0`}
                  target="_blank"
                  className="mt-auto w-full py-5 rounded-2xl bg-[#0A192F]/5 dark:bg-white/5 border border-[#0A192F]/10 dark:border-white/10 text-[#0A192F] dark:text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:scale-95 flex items-center justify-center"
                >
                  Secure Spot
                </Link>
              </div>

              {/* Subtle Card Glow */}
              <div className="absolute inset-0 bg-purple-400/5 opacity-0 group-hover:opacity-100 blur-[100px] transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* --- Reviews / Ratings Section --- */
export function Reviews({ activePet }: { activePet: "dog" | "cat" | null }) {
  const [userRatings, setUserRatings] = useState<any[]>([]);
  const [filterRating, setFilterRating] = useState<number | "All">("All");
  const [localPetType, setLocalPetType] = useState<"Default" | "All" | "dog" | "cat">("Default");

  useEffect(() => {
    const saved = localStorage.getItem("pawpuff_ratings");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Remove test ratings from Nawaz and Jaffer
        const filtered = parsed.filter((r: any) =>
          !r.name.toLowerCase().includes("nawaz") &&
          !r.name.toLowerCase().includes("jaffer")
        );
        setUserRatings(filtered);
      } catch (e) {
        console.error("Error parsing ratings", e);
      }
    }
  }, []);

  const dogReviews = [
    { name: "Surendra Dixit", pet: "Loyal Client", text: "PawPuff has been a game-changer. It’s truly salon quality, with zero stress and no city traffic hassle.", rating: 5 },
    { name: "Arpita H S", pet: "Buddy's Parent", text: "Buddy was calm enough to actually enjoy the bath since it was in our terrace. The attention to detail justifies the premium cost.", rating: 5 },
    { name: "Manisha Parthiban", pet: "Loyal Client", text: "PawPuff is consistent, convenient, and top-tier. They come fully equipped, leave absolutely no mess, and my puppy has never looked cuter.", rating: 5 }
  ];

  const catReviews = [
    { name: "Surendra Dixit", pet: "Loyal Client", text: "PawPuff has been a game-changer. It’s truly salon quality, with zero stress and no city traffic hassle.", rating: 5 },
    { name: "Arpita H S", pet: "Loyal Client", text: "Buddy was calm enough to actually enjoy the bath since it was in our terrace. The attention to detail justifies the premium cost.", rating: 5 },
    { name: "Manisha Parthiban", pet: "Loyal Client", text: "PawPuff is consistent, convenient, and top-tier. They come fully equipped, leave absolutely no mess, and my puppy has never looked cuter.", rating: 5 }
  ];

  const defaultReviews = [
    { name: "Surendra Dixit", pet: "Loyal Client", text: "PawPuff has been a game-changer. It’s truly salon quality, with zero stress and no city traffic hassle.", rating: 5 },
    { name: "Arpita H S", pet: "Buddy's Parent", text: "Buddy was calm enough to actually enjoy the bath since it was in our terrace. The attention to detail justifies the premium cost.", rating: 5 },
    { name: "Manisha Parthiban", pet: "Loyal Client", text: "PawPuff is consistent, convenient, and top-tier. They come fully equipped, leave absolutely no mess, and my puppy has never looked cuter.", rating: 5 }
  ];

  // Determine effective pet type filter
  const effectivePet = localPetType === "Default" ? activePet : (localPetType === "All" ? null : localPetType);

  const filteredUserRatings = effectivePet
    ? userRatings.filter(r => r.type === effectivePet || r.type === "mixed")
    : userRatings;

  const baseReviews = effectivePet === "dog" ? dogReviews : effectivePet === "cat" ? catReviews : defaultReviews;
  let currentReviews = [...filteredUserRatings, ...baseReviews];

  // Filter by star rating
  if (filterRating !== "All") {
    currentReviews = currentReviews.filter((review) => review.rating === filterRating);
  }

  return (
    <section id="ratings" className="py-32 px-8 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-purple-500 text-purple-400" />
            ))}
          </div>
          <motion.h2
            whileHover={{ scale: 1.02 }}
            className="hover:text-purple-400 text-4xl md:text-5xl font-black text-[#0A192F] dark:text-white tracking-tighter transition-colors duration-700 cursor-default mb-10"
          >
            What our <span>Loyal Clients</span> said
          </motion.h2>

          {/* Filters UI */}
          <div className="flex flex-wrap items-center justify-center gap-8 bg-[#0A192F]/5 dark:bg-white/5 p-6 rounded-3xl border border-[#0A192F]/10 dark:border-white/10">

            <div className="flex flex-col items-start gap-3">
              <label className="text-[10px] font-bold uppercase tracking-wider text-purple-400/80 ml-2">Rating</label>
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value === "All" ? "All" : Number(e.target.value))}
                className="bg-transparent border-b-2 border-[#0A192F]/10 dark:border-white/10 py-2 px-2 text-[#0A192F] dark:text-white focus:outline-none focus:border-purple-500 transition-all font-bold text-sm cursor-pointer min-w-[200px] uppercase tracking-wider"
              >
                <option value="All" className="bg-[#F9F7F2] dark:bg-[#0A192F] text-[#0A192F] dark:text-white">All Ratings</option>
                <option value="5" className="bg-[#F9F7F2] dark:bg-[#0A192F] text-[#0A192F] dark:text-white">5 Stars</option>
                <option value="4" className="bg-[#F9F7F2] dark:bg-[#0A192F] text-[#0A192F] dark:text-white">4 Stars</option>
                <option value="3" className="bg-[#F9F7F2] dark:bg-[#0A192F] text-[#0A192F] dark:text-white">3 Stars</option>
                <option value="2" className="bg-[#F9F7F2] dark:bg-[#0A192F] text-[#0A192F] dark:text-white">2 Stars</option>
                <option value="1" className="bg-[#F9F7F2] dark:bg-[#0A192F] text-[#0A192F] dark:text-white">1 Star</option>
              </select>
            </div>

            <div className="flex flex-col items-start gap-3">
              <label className="text-[10px] font-bold uppercase tracking-wider text-purple-400/80 ml-2">Category</label>
              <select
                value={localPetType}
                onChange={(e) => setLocalPetType(e.target.value as any)}
                className="bg-transparent border-b-2 border-[#0A192F]/10 dark:border-white/10 py-2 px-2 text-[#0A192F] dark:text-white focus:outline-none focus:border-purple-500 transition-all font-bold text-sm cursor-pointer min-w-[200px] uppercase tracking-wider"
              >
                <option value="Default" className="bg-[#F9F7F2] dark:bg-[#0A192F] text-[#0A192F] dark:text-white">Smart (Matches Toggle)</option>
                <option value="All" className="bg-[#F9F7F2] dark:bg-[#0A192F] text-[#0A192F] dark:text-white">All Pets</option>
                <option value="dog" className="bg-[#F9F7F2] dark:bg-[#0A192F] text-[#0A192F] dark:text-white">Dogs Only</option>
                <option value="cat" className="bg-[#F9F7F2] dark:bg-[#0A192F] text-[#0A192F] dark:text-white">Cats Only</option>
              </select>
            </div>

          </div>
        </div>

        {currentReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentReviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0A192F]/5 dark:bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-[#0A192F]/10 dark:border-white/10 hover:border-purple-500 transition-all group"
              >
                <div className="flex gap-1 mb-6 text-purple-400">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl text-[#0A192F]/60 dark:text-white/60 mb-8 leading-relaxed font-sans">
                  "{review.text}"
                </p>
                <div>
                  <h4 className="font-bold text-[#0A192F] dark:text-white text-sm uppercase tracking-wider">{review.name}</h4>
                  <p className="text-purple-400 text-xs font-medium uppercase tracking-[0.2em] mt-1">{review.pet}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#0A192F]/5 dark:bg-white/5 rounded-[40px] border border-[#0A192F]/10 dark:border-white/10">
            <p className="text-[#0A192F]/60 dark:text-white/60 font-medium text-lg">No reviews found for this rating.</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* --- Contact Section --- */
export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-8 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <motion.h2
              whileHover={{ scale: 1.02 }}
              className="hover:text-purple-400 text-4xl md:text-5xl font-black text-[#0A192F] dark:text-white tracking-tighter mb-8 transition-colors duration-700 cursor-default"
            >
              Get in <span>Touch</span>
            </motion.h2>
            <p className="text-xl text-[#0A192F]/70 dark:text-white/70 mb-12 max-w-md leading-relaxed">
              Experience the pinnacle of pet care. Our concierge team is ready to curate a bespoke wellness plan for your companion.
            </p>

            <div className="space-y-10">
              {[
                { icon: Mail, label: "Correspondence", value: "mohammednawaz38740@gmail.com" },
                { icon: Phone, label: "Concierge Line", value: "+91 89047 33018" },
                { icon: MapPin, label: "Headquarters", value: "777 Luxury Row, Beverly Hills, CA" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0A192F]/5 dark:bg-white/5 border border-[#0A192F]/10 dark:border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-[#0A192F] transition-all duration-500 shadow-xl">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-400 mb-1 opacity-60">{item.label}</p>
                    <p className="text-xl font-bold text-[#0A192F] dark:text-white transition-colors duration-300 group-hover:text-purple-400">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-[#F9F7F2] dark:bg-[#0A192F]/[0.03] backdrop-blur-3xl border border-[#0A192F]/10 dark:border-white/10 p-12 rounded-[50px] shadow-2xl relative group">
            <h3 className="text-3xl font-sans font-bold text-[#0A192F] dark:text-white mb-10">Inquire Privately</h3>
            <form action="https://formsubmit.co/concierge@pawpuff.com" method="POST" className="space-y-8">
              {/* FormSubmit configurations */}
              <input type="hidden" name="_subject" value="New Inquiry from PawPuff Home Page!" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-2">
                <label className="text-[10px] font-semibold tracking-wider text-[#0A192F]/40 dark:text-white/40 ml-2">Preferred Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Where shall we reply?"
                  className="w-full bg-[#0A192F]/5 dark:bg-white/5 border border-[#0A192F]/10 dark:border-white/10 rounded-2xl py-5 px-8 text-[#0A192F] dark:text-white placeholder:text-[#0A192F]/20 dark:placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all text-lg"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, backgroundColor: "#A855F7", color: "#F9F7F2" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 px-10 rounded-2xl bg-purple-500 text-[#0A192F] font-black uppercase tracking-[0.3em] text-xs transition-all shadow-[0_20px_40px_rgba(168,85,247,0.1)]"
              >
                Send Inquiry
              </motion.button>
              <p className="text-[10px] text-center text-[#0A192F]/30 dark:text-white/30 uppercase tracking-[0.2em] font-medium">
                Our team responds within 2 business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Footer Component --- */
export function Footer({ activePet }: SectionsProps) {
  const pathname = usePathname();
  const isSecondaryPage = pathname === "/rating" || pathname === "/contact";

  return (
    <footer id="about" className="py-16 px-8 bg-transparent border-t border-[#0A192F]/5 dark:border-white/5 relative z-10">
      <div className="max-w-7xl auto flex flex-col items-center text-center">
        {!isSecondaryPage && (
          <>
            <div className="mb-12">
              <motion.img
                src="/images/logo.png"
                alt="PawPuff Logo"
                animate={{
                  y: [0, -15, 0],
                  filter: [
                    "drop-shadow(0 0 20px rgba(192,132,252,0.3))",
                    "drop-shadow(0 0 60px rgba(192,132,252,0.6))",
                    "drop-shadow(0 0 20px rgba(192,132,252,0.3))"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="h-64 w-auto object-contain mx-auto transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="max-w-3xl space-y-8">
              <motion.h3
                whileHover={{ scale: 1.02 }}
                className="hover:text-purple-400 text-2xl md:text-4xl font-bold text-[#0A192F] dark:text-white leading-tight transition-colors duration-1000 cursor-default"
              >
                "Where Luxury meets Loyalty"
              </motion.h3>
              <motion.p
                whileHover={{ scale: 1.01 }}
                className="hover:text-purple-400 text-xl text-[#0A192F]/70 dark:text-white/70 font-light leading-relaxed hover:text-[#0A192F] dark:hover:text-white transition-colors duration-700 cursor-default"
              >
                We redefine pet care by deploying our vetted, professional Grooming Partners to your doorstep, providing a personalized, salon-quality service in the one place your pet feels safest: their home. Our mobile model ensures maximum convenience for you and minimal stress for your cherished companion.
              </motion.p>
            </div>

            <div className="mt-10 w-full border-t border-[#0A192F]/10 dark:border-white/10"></div>
          </>
        )}

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 pt-12 w-full text-center md:text-left">
          {/* Services Column */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h4 className="text-purple-400 font-black uppercase tracking-widest text-[11px]">Services</h4>
            <div className="flex flex-col sm:flex-row gap-10 md:gap-16">
              <div className="flex flex-col items-center md:items-start gap-3">
                <p className="text-[#0A192F] dark:text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Ala Carte</p>
                <div className="flex flex-col items-center md:items-start gap-2">
                  {[
                    "Happy Bath", "Super Grooming", "Puff Styling",
                    "Kitty Hygiene", "Super Kitty Grooming", "Puff Cat Styling"
                  ].map((s) => (
                    <span key={s} className="text-[#0A192F]/40 dark:text-white/40 text-[11px] font-medium hover:text-purple-400 transition-colors cursor-default whitespace-nowrap">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-3">
                <p className="text-[#0A192F] dark:text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Subscriptions</p>
                <div className="flex flex-col items-center md:items-start gap-2">
                  {[
                    "Happy Bath Monthly", "Elite Grooming Circle",
                    "Royal Styling Circle", "Monthly Feline Care"
                  ].map((s) => (
                    <span key={s} className="text-[#0A192F]/40 dark:text-white/40 text-[11px] font-medium hover:text-purple-400 transition-colors cursor-default whitespace-nowrap">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-6">
            <h4 className="text-purple-400 font-black uppercase tracking-widest text-[11px]">Company</h4>
            <div className="flex flex-col items-center md:items-start gap-2">
              {!isSecondaryPage && (
                <Link href="/#about" className="text-[#0A192F]/40 dark:text-white/40 hover:text-[#0A192F] dark:hover:text-white transition-colors text-[11px] font-medium">About Us</Link>
              )}
              <Link href="/contact" className="text-[#0A192F]/40 dark:text-white/40 hover:text-[#0A192F] dark:hover:text-white transition-colors text-[11px] font-medium">Contact Us</Link>
              <Link href="/rating" className="text-[#0A192F]/40 dark:text-white/40 hover:text-[#0A192F] dark:hover:text-white transition-colors text-[11px] font-medium">Share Review</Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-6">
            <h4 className="text-purple-400 font-black uppercase tracking-widest text-[11px]">Social</h4>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="https://www.instagram.com/pawpuff.pet?igsh=cTQ1eGR1ZnJmMmQ4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-[#0A192F]/40 dark:text-white/40 hover:text-[#0A192F] dark:hover:text-white transition-colors text-[11px] font-medium">Instagram</a>
              <a href="https://twitter.com/pawpuff" target="_blank" rel="noopener noreferrer" className="text-[#0A192F]/40 dark:text-white/40 hover:text-[#0A192F] dark:hover:text-white transition-colors text-[11px] font-medium">Twitter</a>
              <a href="https://api.whatsapp.com/send/?phone=919035392226&text=Hello+PawPuff!+I'm+reaching+out+from+your+social+links.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-[#0A192F]/40 dark:text-white/40 hover:text-[#0A192F] dark:hover:text-white transition-colors text-[11px] font-medium">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="mt-20 text-[#0A192F]/40 dark:text-white/40 text-sm font-medium">

          &copy; 2026 PawPuff. All rights reserved. Premium Pet Care.
        </div>
      </div>
    </footer>
  );
}
