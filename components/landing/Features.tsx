"use client"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { stagger, fadeUp } from "./motion"
import { features } from "./content"

export function Features() {
  return (
    <section id="features" className="border-t border-white/[0.06] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Section label + heading */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mb-16 sm:mb-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#FACC15]">Features</p>
          <h2 className="mt-5 max-w-[500px] text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Everything your team<br/>actually needs
          </h2>
          <p className="mt-5 max-w-[420px] text-[18px] leading-[1.75] text-[#A1A1AA]">
            No noise. No bloat. Just the tools that help sales teams win more deals.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {features.map(f => {
            const Icon = f.icon
            return (
              <motion.div key={f.title} variants={fadeUp} whileHover={{y:-5}}
                className={`group relative rounded-[20px] border border-white/[0.06] bg-[#111111] p-8 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#171717] ${f.span??""}`}>
                {/* Subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{background:"radial-gradient(250px circle at 30% 30%, rgba(250,204,21,0.04), transparent)"}}/>

                <div className="flex items-start justify-between">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3.5 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={20} className="text-[#FACC15]"/>
                  </div>
                  <ArrowUpRight size={16} className="text-zinc-700 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-400 group-hover:opacity-100"/>
                </div>
                <h3 className="mt-6 text-[17px] font-bold tracking-[-0.02em] text-white">{f.title}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.65] text-[#A1A1AA]">{f.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
