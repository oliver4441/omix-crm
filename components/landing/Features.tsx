"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeUpContainer, fadeUpItem } from "./motion"
import { features } from "./content"

export function Features() {
  return (
    <section id="features" className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">Features</p>
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Everything your sales
            <br />
            <span className="text-zinc-400">team actually needs</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-3 sm:mt-16 sm:gap-4 md:grid-cols-3 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={fadeUpItem}
                whileHover={{ y: -4 }}
                className={`group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05] sm:p-7 ${f.span ?? ""}`}
              >
                {/* subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `radial-gradient(200px circle at 50% -20%, ${f.color.includes("violet") ? "rgba(139,92,246,0.07)" : "rgba(59,130,246,0.07)"}, transparent)` }}
                />
                <div className="flex items-start justify-between">
                  <div className={`inline-flex rounded-xl border ${f.border} ${f.bg} p-3`}>
                    <Icon className={f.color} size={22} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-zinc-700 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-400 group-hover:opacity-100"
                  />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white sm:text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{f.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
