"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"
import { fadeUpContainer, fadeUpItem } from "./motion"
import { pricingTiers } from "./content"

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">Pricing</p>
          <h2
            className="max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Simple pricing,{" "}
            <span className="text-zinc-400">in KES</span>
          </h2>
          <p className="mt-4 max-w-sm text-base text-zinc-500">
            Start free. No credit card needed. Upgrade when your team grows.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:gap-5 lg:grid-cols-3"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUpItem}
              whileHover={{ y: tier.highlighted ? -6 : -4 }}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 sm:p-8 ${
                tier.highlighted
                  ? "border-violet-500/40 bg-gradient-to-b from-violet-500/[0.08] via-violet-500/[0.04] to-transparent shadow-2xl shadow-violet-500/10"
                  : "border-white/[0.07] bg-white/[0.03] hover:border-white/[0.12]"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-3.5 py-1 text-[11px] font-semibold shadow-lg">
                  <Zap size={10} />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-base font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {tier.name}
                </h3>
                <p className="mt-1.5 text-xs text-zinc-500">{tier.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/[0.06]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {tier.price}
                  </span>
                </div>
                <p className="mt-1 text-xs text-zinc-600">{tier.unit}</p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <Check size={14} className="mt-0.5 shrink-0 text-violet-400" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30"
                    : "border border-white/[0.1] text-zinc-300 hover:border-white/[0.2] hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
