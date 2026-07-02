"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeUp } from "./motion"

export function CTASection() {
  return (
    <section className="border-t border-white/[0.06] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#111111] px-8 py-20 text-center sm:px-16 sm:py-24 lg:py-28">
          {/* Very subtle yellow glow — centred */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{background:"radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 70%)"}}/>
          {/* Grid overlay */}
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-60"/>
          <div className="pointer-events-none absolute inset-0"
            style={{background:"radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, #111111 80%)"}}/>

          <div className="relative">
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
              Free to start · No credit card needed
            </p>
            <h2 className="mx-auto mt-6 max-w-[600px] text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-white">
              Your next deal is already in your pipeline.
            </h2>
            <p className="mx-auto mt-6 max-w-[480px] text-[18px] leading-[1.75] text-[#A1A1AA]">
              Join hundreds of sales teams across Kenya who use Omix CRM to track leads and close more deals every month.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.97}}>
                <Link href="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-8 py-4 text-[15px] font-bold text-black shadow-xl shadow-[#FACC15]/20 transition-shadow hover:shadow-[#FACC15]/35">
                  Start Free Today <ArrowRight size={17}/>
                </Link>
              </motion.div>
              <Link href="/login"
                className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] px-8 py-4 text-[15px] font-semibold text-zinc-300 backdrop-blur-sm transition-all hover:border-white/[0.2] hover:text-white">
                Sign in
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
