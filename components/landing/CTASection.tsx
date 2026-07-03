"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeUp } from "./motion"

export function CTASection() {
  return (
    <section className="border-t border-white/[0.05] py-20 sm:py-[100px] lg:py-[140px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#111111] px-8 py-20 text-center sm:px-16 sm:py-24 lg:px-20 lg:py-28">
          {/* Grid overlay */}
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
          {/* Radial mask */}
          <div className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 75% 70% at 50% 50%, transparent 20%, #111111 80%)" }} />
          {/* Single yellow glow */}
          <div className="animate-breathe pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2"
            style={{ background: "radial-gradient(circle, rgba(250,204,21,0.14) 0%, transparent 70%)" }} />

          <div className="relative z-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#525252]">
              Get started today · No credit card required
            </p>
            <h2 className="mx-auto mt-7 max-w-[640px] text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
              Your next deal is already in your pipeline.
            </h2>
            <p className="mx-auto mt-7 max-w-[480px] text-[18px] leading-[1.8] text-[#A3A3A3]">
              Join hundreds of sales teams across Kenya who use Omix CRM to close
              more deals every month.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-8 py-4 text-[16px] font-bold text-black shadow-xl shadow-[#FACC15]/20 transition-shadow hover:shadow-[#FACC15]/35">
                  Start Free Today <ArrowRight size={18} />
                </Link>
              </motion.div>
              <Link href="/login"
                className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] px-8 py-4 text-[16px] font-semibold text-[#A3A3A3] transition-all hover:border-white/[0.2] hover:text-white">
                Sign in
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
