"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { useRef } from "react"
import { easeOut } from "./motion"
import { stats, audiences } from "./content"
import { DashboardMockup } from "./DashboardMockup"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3])

  return (
    <section id="top" ref={ref} className="relative overflow-hidden border-b border-white/[0.06]">
      {/* dot grid */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-100" />
      {/* radial fade to hide grid at edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_40%,#080A12_100%)]" />

      {/* ambient glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 pt-20 pb-0 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/[0.08] px-4 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-xl sm:text-sm">
            <Sparkles size={12} className="text-violet-400" />
            Built for African sales teams
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
          className="mx-auto mt-7 max-w-3xl text-center text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            The CRM that moves
          </span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            deals forward
          </span>
        </motion.h1>

        {/* subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
          className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          Track leads, manage follow-ups, monitor your pipeline, and close more deals —
          all from one fast, modern dashboard.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/signup">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-3.5 text-sm font-semibold shadow-lg shadow-violet-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-500/35 sm:text-base"
            >
              Get Started Free <ArrowRight size={16} />
            </motion.span>
          </Link>
          <Link href="/login">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.22] hover:bg-white/[0.08] hover:text-white sm:text-base"
            >
              Sign in
            </motion.span>
          </Link>
        </motion.div>

        {/* built for strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-xs text-zinc-600">Used by</span>
          {audiences.map((a) => (
            <span key={a} className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-500">
              {a}
            </span>
          ))}
        </motion.div>

        {/* stat row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-9 grid max-w-lg grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-bold text-white sm:text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.value}
              </div>
              <div className="mt-0.5 text-[11px] text-zinc-500">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* dashboard mockup — the hero screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
          style={{ y: mockupY, opacity: mockupOpacity }}
          className="relative mt-14 w-full"
        >
          {/* top fade gradient so it bleeds into the next section */}
          <div className="pointer-events-none absolute -bottom-1 inset-x-0 h-32 bg-gradient-to-t from-[#080A12] to-transparent z-10" />
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  )
}
