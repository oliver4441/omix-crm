"use client"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { stagger, fadeUp } from "./motion"
import { features } from "./content"

export function Features() {
  return (
    <section id="features" className="border-t border-white/[0.05] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15]">Features</p>
          <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{fontFamily:"'Space Grotesk',sans-serif"}}>
            Everything your team needs.<br/>
            <span className="text-zinc-500">Nothing they don&apos;t.</span>
          </h2>
        </motion.div>

        <motion.div variants={stagger(0.09)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mt-14 grid gap-4 sm:gap-5 md:grid-cols-3">
          {features.map(f => {
            const Icon = f.icon
            return (
              <motion.div key={f.title} variants={fadeUp} whileHover={{y:-6,scale:1.01}}
                className={`group gradient-border relative cursor-default rounded-[20px] bg-[#111111] p-7 transition-all duration-300 hover:bg-[#161616] hover:shadow-2xl hover:shadow-[#FACC15]/5 sm:p-8 ${f.span??""}`}>
                {/* hover yellow glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{background:"radial-gradient(300px circle at 50% -20%,rgba(250,204,21,0.06),transparent)"}}/>
                {/* animated border glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{boxShadow:"inset 0 0 0 1px rgba(250,204,21,0.15)"}}/>

                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-xl bg-[#FACC15]/[0.08] p-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FACC15]/15">
                    <Icon size={22} className="text-[#FACC15]"/>
                  </div>
                  <ArrowUpRight size={16} className="text-zinc-700 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FACC15] group-hover:opacity-100"/>
                </div>
                <h3 className="mt-6 text-lg font-bold text-white sm:text-xl" style={{fontFamily:"'Space Grotesk',sans-serif"}}>{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-500">{f.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
