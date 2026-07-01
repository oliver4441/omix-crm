"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { easeInOut } from "./motion"

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.08]">
      <motion.div
        animate={{ opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: easeInOut }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[90vw] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-[1400px] flex-col items-center px-5 py-20 text-center sm:px-6 sm:py-28 lg:py-32"
      >
        <h2
          className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Ready To Scale Your Business?
        </h2>
        <p className="mt-5 max-w-xl px-2 text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg">
          Start managing leads, follow-ups, clients, and sales operations with Omix CRM today.
        </p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="mt-8 sm:mt-10">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 text-base font-semibold shadow-xl shadow-purple-500/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500/30 sm:px-10 sm:py-5 sm:text-lg"
          >
            Create Free Account <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
