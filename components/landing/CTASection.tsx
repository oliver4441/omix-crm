"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-[#0c0e1c] to-blue-500/10 px-8 py-16 text-center sm:px-12 sm:py-20 lg:py-24"
        >
          {/* background glows */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-16 right-1/4 h-48 w-48 rounded-full bg-blue-500/15 blur-[60px]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">Get started today</p>
            <h2
              className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Your next deal is already in your pipeline.
              <span className="text-zinc-400"> Go close it.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-zinc-500">
              Join hundreds of sales teams across Kenya who use Omix CRM to track leads and hit targets.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-8 py-4 text-base font-semibold shadow-xl shadow-violet-500/25 transition-shadow hover:shadow-2xl hover:shadow-violet-500/35"
                >
                  Create Free Account <ArrowRight size={18} />
                </Link>
              </motion.div>
              <Link
                href="/login"
                className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] px-8 py-4 text-base font-semibold text-zinc-300 backdrop-blur-xl transition-all hover:border-white/[0.2] hover:text-white"
              >
                Sign in
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
