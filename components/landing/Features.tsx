"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeUpContainer, fadeUpItem } from "./motion"
import { features } from "./content"

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
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
          Everything You Need To Run Your CRM
        </h2>
        <p className="mt-4 px-2 text-base text-zinc-400 sm:mt-5 sm:text-lg">
          Built for modern businesses, agencies, SACCOs, and sales teams across Africa.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 grid gap-5 sm:mt-20 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((f) => {
          const Icon = f.icon
          return (
            <motion.div
              key={f.title}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              className={`group relative rounded-[20px] border ${f.border} bg-white/[0.03] p-7 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.06] hover:shadow-2xl sm:p-9 ${f.glow}`}
            >
              <div className="flex items-start justify-between">
                <div className={`inline-flex rounded-2xl border ${f.border} ${f.bg} p-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={f.color} size={30} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-zinc-700 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-400 group-hover:opacity-100"
                />
              </div>
              <h3
                className="mt-6 text-lg font-semibold tracking-tight sm:mt-7 sm:text-xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{f.desc}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
