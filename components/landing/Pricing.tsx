"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { fadeUpContainer, fadeUpItem } from "./motion"
import { pricingTiers } from "./content"

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/[0.08] bg-white/[0.015] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
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
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 px-2 text-base text-zinc-400 sm:mt-5 sm:text-lg">
            Priced in Kenyan Shillings. Start free, upgrade when your team grows.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-14 grid max-w-5xl gap-5 sm:mt-20 sm:gap-6 lg:grid-cols-3"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-[20px] border p-7 backdrop-blur-xl transition-all duration-300 sm:p-8 ${
                tier.highlighted
                  ? "border-purple-500/40 bg-gradient-to-b from-purple-500/[0.08] to-transparent shadow-2xl shadow-purple-500/10"
                  : "border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06]"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 text-[11px] font-semibold">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold tracking-tight sm:text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-3xl font-bold sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {tier.price}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">{tier.unit}</p>

              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <Check size={16} className="mt-0.5 shrink-0 text-purple-400" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`mt-8 flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30"
                    : "border border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.08]"
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
