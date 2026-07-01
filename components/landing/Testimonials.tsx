"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { fadeUpContainer, fadeUpItem } from "./motion"
import { testimonials } from "./content"

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Teams Run Their Pipeline On Omix
        </h2>
        <p className="mt-4 px-2 text-base text-zinc-400 sm:mt-5 sm:text-lg">
          A look at how sales and operations teams use Omix CRM day to day.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 grid gap-5 sm:mt-20 sm:gap-6 md:grid-cols-3"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUpItem}
            whileHover={{ y: -6 }}
            className="flex flex-col rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-7 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.06] sm:p-8"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-zinc-300 sm:text-base">
              “{t.quote}”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 text-xs font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {t.initials}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-zinc-200">{t.name}</p>
                <p className="truncate text-xs text-zinc-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
