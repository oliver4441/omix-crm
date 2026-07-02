"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"
import { stagger, fadeUp } from "./motion"
import { pricingTiers } from "./content"

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/[0.06] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Heading */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mb-16 sm:mb-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#FACC15]">Pricing</p>
          <h2 className="mt-5 max-w-[420px] text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Simple pricing, billed in KES
          </h2>
          <p className="mt-5 max-w-[360px] text-[18px] leading-[1.75] text-[#A1A1AA]">
            Free trial on every plan. No credit card required.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div variants={stagger(0.09)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {pricingTiers.map(tier => (
            <motion.div key={tier.name} variants={fadeUp} whileHover={{y:tier.featured ? -7 : -4}}
              className={`relative flex flex-col rounded-[20px] border p-8 transition-all duration-300 sm:p-10 ${
                tier.featured
                  ? "border-[#FACC15]/20 bg-[#171717] shadow-[0_0_60px_rgba(250,204,21,0.06)]"
                  : "border-white/[0.06] bg-[#111111] hover:border-white/[0.1] hover:bg-[#171717]"
              }`}>
              {tier.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-[#FACC15] px-4 py-1.5 text-[12px] font-bold text-black shadow-lg shadow-[#FACC15]/20">
                  <Zap size={11} fill="black"/> Most Popular
                </span>
              )}

              {/* Name + desc */}
              <h3 className="text-[16px] font-bold tracking-[-0.02em] text-white">{tier.name}</h3>
              <p className="mt-2 text-[14px] text-zinc-500">{tier.desc}</p>

              {/* Price */}
              <div className="my-8 border-b border-white/[0.06] pb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-[36px] font-extrabold tracking-[-0.04em] text-white">
                    {tier.price}
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-zinc-600">{tier.unit}</p>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3.5 mb-9">
                {tier.features.map(feat => (
                  <li key={feat} className="flex items-start gap-3 text-[14px] text-zinc-400">
                    <Check size={15} className={`mt-0.5 shrink-0 ${tier.featured ? "text-[#FACC15]" : "text-zinc-600"}`}/>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href={tier.href}
                className={`flex items-center justify-center rounded-xl px-5 py-3.5 text-[14px] font-bold transition-all duration-200 ${
                  tier.featured
                    ? "bg-[#FACC15] text-black shadow-md shadow-[#FACC15]/15 hover:bg-[#FDE68A]"
                    : "border border-white/[0.1] text-zinc-300 hover:border-white/[0.2] hover:text-white"
                }`}>
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
