"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CirclePlay, Sparkles } from "lucide-react"
import { easeInOut } from "./motion"
import { stats, audiences } from "./content"
import { DashboardMockup } from "./DashboardMockup"
import { PipelineTicker } from "./PipelineTicker"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/[0.08]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-500/[0.06] via-transparent to-blue-500/[0.05]" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.24, 0.14] }}
        transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
        className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-purple-500/25 blur-[110px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: easeInOut, delay: 2 }}
        className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-blue-500/22 blur-[110px]"
      />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-24 xl:gap-16">
        {/* LEFT — copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-4 py-1.5 text-xs text-purple-300 backdrop-blur-xl sm:text-sm"
          >
            <Sparkles size={13} className="text-purple-400" />
            Modern CRM Platform for Growing Businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-balance bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-[2.25rem] font-bold leading-[1.15] tracking-tight text-transparent sm:text-5xl lg:text-[3.25rem]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Manage Leads &amp; Sales From One Powerful Dashboard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Omix CRM helps businesses track leads, manage follow-ups, monitor sales
            pipelines, and automate client workflows with a modern SaaS experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Link href="/signup">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-purple-500/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-purple-500/30 sm:px-8 sm:py-4 sm:text-base"
              >
                Get Started Free <ArrowRight size={18} />
              </motion.span>
            </Link>
            <a href="#pipeline">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:px-8 sm:py-4 sm:text-base"
              >
                <CirclePlay size={18} className="text-zinc-400" />
                See How It Works
              </motion.span>
            </a>
          </motion.div>

          {/* audience row — honest "built for", not fabricated logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:justify-start"
          >
            <span className="text-xs text-zinc-600">Built for</span>
            {audiences.map((a) => (
              <span
                key={a}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-400"
              >
                {a}
              </span>
            ))}
          </motion.div>

          {/* stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 grid w-full max-w-md grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-x-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-xl font-bold text-white sm:text-2xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="mt-0.5 text-[11px] text-zinc-500 sm:text-xs">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <DashboardMockup />
        </motion.div>
      </div>

      {/* signature element — full width, sits below both columns */}
      <div className="relative border-t border-white/[0.06] bg-white/[0.015] py-5">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
          <PipelineTicker />
        </div>
      </div>
    </section>
  )
}
