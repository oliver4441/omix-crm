"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"
import { stagger, fadeUp } from "./motion"
import { plans } from "./content"

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/[0.05] py-20 sm:py-[100px] lg:py-[140px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mb-16 sm:mb-20">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FACC15]">Pricing</p>
          <h2 className="mt-5 max-w-[400px] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-5 max-w-[360px] text-[18px] leading-[1.8] text-[#A3A3A3]">
            Billed in KES. Free trial on every plan.
          </p>
        </motion.div>

        <motion.div variants={stagger(0.09)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid gap-6 lg:grid-cols-3">
          {plans.map(p => (
            <motion.div key={p.name} variants={fadeUp} whileHover={{y:p.featured?-8:-4}}
              className={`relative flex flex-col rounded-[20px] border p-8 transition-all duration-300 sm:p-10 ${
                p.featured
                  ? "border-[#FACC15]/25 bg-[#171717] shadow-[0_0_80px_rgba(250,204,21,0.07)]"
                  : "border-white/[0.06] bg-[#111111] hover:border-white/[0.1] hover:bg-[#181818]"
              }`}>
              {p.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-[#FACC15] px-4 py-1.5 text-[12px] font-bold text-black shadow-lg shadow-[#FACC15]/25">
                  <Zap size={11} fill="black"/> Most Popular
                </span>
              )}
              <h3 className="text-[16px] font-bold text-white">{p.name}</h3>
              <p className="mt-2 text-[14px] text-[#525252]">{p.desc}</p>
              <div className="my-8 border-b border-white/[0.06] pb-8">
                <p className="text-[38px] font-extrabold tracking-[-0.04em] text-white">{p.price}</p>
                <p className="mt-1 text-[13px] text-[#525252]">{p.per}</p>
              </div>
              <ul className="flex-1 space-y-4 mb-9">
                {p.perks.map(f => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-[#A3A3A3]">
                    <Check size={15} className={`mt-0.5 shrink-0 ${p.featured?"text-[#FACC15]":"text-[#525252]"}`}/>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={p.href}
                className={`flex items-center justify-center rounded-[12px] px-5 py-3.5 text-[14px] font-bold transition-all duration-200 ${
                  p.featured
                    ? "bg-[#FACC15] text-black shadow-md shadow-[#FACC15]/20 hover:bg-[#FDE68A]"
                    : "border border-white/[0.1] text-[#A3A3A3] hover:border-white/[0.2] hover:text-white"
                }`}>
                {p.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
