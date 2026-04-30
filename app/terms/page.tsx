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
              Terms & Conditions
            </h1>
            <p className="text-[#0A192F]/70 dark:text-white/70 mb-12">
              By booking a service with PawPuff, you agree to the following Terms & Conditions.
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">1. Services</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed mb-4">
                  PawPuff provides professional pet grooming services at the customer's location. Services may include bathing, grooming, styling, coat care, nail trimming, ear cleaning, hygiene treatments, and related grooming services for dogs and cats.
                </p>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  All services are carried out by trained and vetted grooming professionals. PawPuff reserves the right to modify, refuse, or discontinue any service where necessary for safety, hygiene, or operational reasons.
                </p>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">2. Booking, Rescheduling & Cancellation</h2>
                <ul className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed space-y-3 list-disc list-inside">
                  <li>Appointments must be booked at least <strong>24 hours in advance</strong>, subject to availability.</li>
                  <li>Cancellations made within <strong>12 hours</strong> of the scheduled appointment may attract a cancellation fee.</li>
                  <li>Failure to attend the appointment or unavailability at the service location ("No-Show") may result in being charged up to <strong>100% of the booking amount</strong>.</li>
                  <li>PawPuff reserves the right to reschedule or cancel appointments due to unforeseen circumstances, including but not limited to weather conditions, staff emergencies, traffic delays, or operational issues.</li>
                  <li>In such cases, customers will be offered the next available slot.</li>
                </ul>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">3. Pet Eligibility & Owner Responsibilities</h2>
                <ul className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed space-y-3 list-disc list-inside">
                  <li>Pets must be healthy and up to date on vaccinations.</li>
                  <li>Customers must disclose any medical conditions, allergies, injuries, pregnancy, behavioral concerns, or history of aggression before the appointment.</li>
                  <li>Failure to disclose relevant information may result in refusal of service without refund.</li>
                  <li>Aggressive, highly anxious, or unsafe pets may be subject to additional handling charges or service refusal at PawPuff's sole discretion.</li>
                  <li>A responsible adult owner or authorized representative must remain present during the service at all times.</li>
                </ul>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">4. Pricing & Payment</h2>
                <ul className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed space-y-3 list-disc list-inside">
                  <li>Prices displayed are base prices and may vary depending on Packages and add-on requests.</li>
                  <li>Full payment is due immediately upon completion of the service unless prepaid.</li>
                  <li>We accept UPI and approved digital payment methods.</li>
                  <li>PawPuff reserves the right to revise pricing at any time without prior notice.</li>
                </ul>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">5. Liability Disclaimer</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed mb-4">
                  While PawPuff takes reasonable care and follows professional handling standards, grooming involves inherent risks.
                </p>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed mb-3">
                  <strong>PawPuff shall not be liable for:</strong>
                </p>
                <ul className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed space-y-2 list-disc list-inside mb-4">
                  <li>Pre-existing medical or skin conditions</li>
                  <li>Allergic reactions to commonly used grooming products</li>
                  <li>Stress-related reactions during grooming</li>
                  <li>Injuries caused by the pet's own movement, temperament, or behavior</li>
                  <li>Minor grooming sensitivities such as redness, itching, or irritation</li>
                  <li>Delays or cancellations caused by circumstances beyond our control</li>
                </ul>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  Customers accept full responsibility for informing PawPuff of any health or behavioral concerns before service begins.
                </p>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">6. Subscriptions & Packages</h2>
                <ul className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed space-y-3 list-disc list-inside">
                  <li>Subscription packages are valid for <strong>6 months</strong> from the date of purchase unless otherwise stated.</li>
                  <li>Unused sessions will automatically expire after the validity period and shall not be refundable, transferable, or extendable.</li>
                  <li>Missed or unattended appointments may be counted as used sessions.</li>
                  <li>If a subscription is canceled after purchase, PawPuff reserves the right to deduct the value of services already used, completed bookings, and applicable cancellation charges.</li>
                  <li>In addition, up to <strong>60% of the remaining subscription value</strong> may be retained as an administrative and cancellation fee.</li>
                  <li>Refunds, if approved, shall be processed solely at PawPuff's discretion.</li>
                </ul>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">7. Right to Refuse Service</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed mb-3">
                  PawPuff reserves the absolute right to refuse or stop service at any time if:
                </p>
                <ul className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed space-y-2 list-disc list-inside">
                  <li>The pet poses a safety risk</li>
                  <li>The environment is unsafe or unhygienic</li>
                  <li>Misconduct or abusive behavior is displayed by the customer</li>
                  <li>Required pet information was withheld</li>
                  <li>Payment obligations are not met</li>
                </ul>
              </section>

              <section className="bg-white/50 dark:bg-white/[0.05] border border-[#0A192F]/10 dark:border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0A192F] dark:text-white mb-4">8. Changes to Terms</h2>
                <p className="text-[#0A192F]/70 dark:text-white/70 leading-relaxed">
                  PawPuff reserves the right to update or amend these Terms & Conditions at any time without prior notice. Continued use of our services shall constitute acceptance of the revised terms.
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
