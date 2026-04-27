"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const [activePet, setActivePet] = React.useState<"dog" | "cat" | null>(null);

  return (
    <div className="min-h-screen bg-[#F9F7F2] dark:bg-[#0A192F] relative overflow-hidden transition-colors duration-700">
      <Navbar activePet={activePet} setActivePet={setActivePet} />
      
      <main className="pt-40 pb-32 px-8 relative">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-[#0A192F]/60 dark:text-white/50 hover:text-purple-500 transition-all duration-300 mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-black text-[#0A192F] dark:text-white tracking-[-0.02em] mb-8">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#0A192F]/50 dark:text-white/50 mb-12">
              Last updated: April 27, 2026
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">1. Information We Collect</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  We collect information you provide directly to us, including your name, email address, phone number, pet information, and service preferences when you fill out our contact forms or book our services.
                </p>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">2. How We Use Your Information</h2>
                <ul className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed space-y-2 list-disc list-inside">
                  <li>To provide and improve our pet grooming services</li>
                  <li>To communicate with you about appointments and services</li>
                  <li>To send promotional offers and updates (with your consent)</li>
                  <li>To respond to your inquiries and support requests</li>
                </ul>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">3. Information Sharing</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, provided they agree to keep this information confidential.
                </p>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">4. Data Security</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">5. Your Rights</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at hello@pawpuff.in.
                </p>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">6. Contact Us</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:<br />
                  <strong>Email:</strong> hello@pawpuff.in<br />
                  <strong>WhatsApp:</strong> +91 90353 92226
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer activePet={activePet} setActivePet={setActivePet as any} />
    </div>
  );
}
