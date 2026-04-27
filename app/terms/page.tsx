"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-sm text-[#0A192F]/50 dark:text-white/50 mb-12">
              Last updated: April 27, 2026
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">1. Services</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  PawPuff provides professional pet grooming services at your doorstep. Our services include bathing, grooming, styling, and hygiene treatments for dogs and cats. All services are performed by trained and vetted grooming professionals.
                </p>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">2. Booking & Cancellation</h2>
                <ul className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed space-y-2 list-disc list-inside">
                  <li>Appointments must be booked at least 24 hours in advance</li>
                  <li>Cancellations made within 12 hours of the appointment may incur a cancellation fee</li>
                  <li>We reserve the right to reschedule appointments due to unforeseen circumstances</li>
                  <li>No-shows may be charged the full service amount</li>
                </ul>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">3. Pet Requirements</h2>
                <ul className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed space-y-2 list-disc list-inside">
                  <li>Pets must be up-to-date on vaccinations</li>
                  <li>Please inform us of any health conditions, allergies, or behavioral concerns</li>
                  <li>Aggressive pets may require additional handling fees or service refusal</li>
                  <li>Pet owners must be present during the service</li>
                </ul>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">4. Pricing & Payment</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  Prices are based on pet size, breed, coat condition, and selected services. Additional charges may apply for severely matted coats or special treatments. Payment is due upon completion of service. We accept cash, UPI, and major digital payment methods.
                </p>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">5. Liability</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  While we take utmost care of your pets, PawPuff is not liable for any pre-existing conditions, allergic reactions to standard grooming products, or injuries that may occur due to a pet's behavior. We recommend discussing any concerns before the service begins.
                </p>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">6. Subscriptions</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  Subscription packages are valid for the specified duration and number of sessions. Unused sessions do not roll over to the next month. Subscriptions can be cancelled with 7 days notice before the next billing cycle.
                </p>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">7. Contact</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  For questions or concerns regarding these terms, please contact us at:<br />
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
