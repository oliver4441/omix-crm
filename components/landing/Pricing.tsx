"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"
import { stagger, fadeUp } from "./motion"
import { pricingTiers } from "./content"

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/[0.05] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15]">Pricing</p>
          <h2 className="mt-4 max-w-lg text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{fontFamily:"'Space Grotesk',sans-serif"}}>
            Simple pricing,<br/><span className="text-zinc-500">billed in KES</span>
          </h2>
          <p className="mt-4 max-w-sm text-sm text-zinc-500">Free trial on every plan. No credit card required.</p>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid gap-5 lg:grid-cols-3">
          {pricingTiers.map(tier => (
            <motion.div key={tier.name} variants={fadeUp}
              whileHover={{y:tier.featured?-8:-5,scale:tier.featured?1.01:1}}
              className={`gradient-border relative flex flex-col rounded-[20px] p-7 transition-all duration-300 sm:p-8 ${
                tier.featured
                  ? "bg-[#141414] shadow-2xl shadow-[#FACC15]/10"
                  : "bg-[#111111] hover:bg-[#141414]"
              }`}>
              {tier.featured && (
                <>
                  {/* animated yellow border */}
                  <div className="pointer-events-none absolute inset-0 rounded-[20px]"
                    style={{boxShadow:"inset 0 0 0 1px rgba(250,204,21,0.25), 0 0 40px rgba(250,204,21,0.08)"}}/>
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-[#FACC15] px-4 py-1.5 text-[11px] font-extrabold text-black shadow-xl shadow-[#FACC15]/30">
                    <Zap size={10} fill="black"/> Most Popular
                  </span>
                </>
              )}

              <h3 className="text-base font-bold text-white" style={{fontFamily:"'Space Grotesk',sans-serif"}}>{tier.name}</h3>
              <p className="mt-1.5 text-xs text-zinc-500">{tier.desc}</p>

              <div className="my-6 border-b border-white/[0.05] pb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white sm:text-4xl"
                    style={{fontFamily:"'Space Grotesk',sans-serif"}}>{tier.price}</span>
                </div>
                <p className="mt-1 text-xs text-zinc-600">{tier.unit}</p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map(feat => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <Check size={14} className={`mt-0.5 shrink-0 ${tier.featured?"text-[#FACC15]":"text-zinc-500"}`}/>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link href={tier.href}
                className={`flex items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-300 ${
                  tier.featured
                    ? "bg-[#FACC15] text-black shadow-lg shadow-[#FACC15]/20 hover:bg-[#FDE68A] hover:shadow-[#FACC15]/35"
                    : "border border-white/[0.08] text-zinc-300 hover:border-white/[0.18] hover:bg-white/[0.04] hover:text-white"
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
