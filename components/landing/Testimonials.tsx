"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { fadeUpContainer, fadeUpItem } from "./motion"
import { testimonials } from "./content"

const gradients = [
  "from-violet-500/30 to-blue-500/30",
  "from-blue-500/30 to-cyan-500/30",
  "from-purple-500/30 to-violet-500/30",
]

export function Testimonials() {
  return (
    <section className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">What teams say</p>
          <h2
            className="max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Trusted by teams across Kenya
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:gap-5 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUpItem}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 transition-all duration-300 hover:border-white/[0.12] sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `radial-gradient(180px circle at 50% 0%, rgba(139,92,246,0.05), transparent)` }}
              />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-zinc-300 sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradients[i]} text-xs font-semibold text-white`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-200">{t.name}</p>
                  <p className="text-xs text-zinc-600">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
