"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { stagger, fadeUp } from "./motion"
import { testimonials } from "./content"

export function Testimonials() {
  return (
    <section className="border-t border-white/[0.05] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15]">Testimonials</p>
          <h2 className="mt-4 max-w-lg text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{fontFamily:"'Space Grotesk',sans-serif"}}>
            Trusted by teams<br/><span className="text-zinc-500">across Kenya</span>
          </h2>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid gap-5 md:grid-cols-3">
          {testimonials.map(t => (
            <motion.div key={t.name} variants={fadeUp} whileHover={{y:-6}}
              className="group gradient-border relative flex flex-col rounded-[20px] bg-[#111111] p-7 transition-all duration-300 hover:bg-[#161616] hover:shadow-2xl hover:shadow-[#FACC15]/5 sm:p-8">
              <div className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{boxShadow:"inset 0 0 0 1px rgba(250,204,21,0.12)"}}>
              </div>
              <div className="flex gap-0.5 mb-5">
                {Array.from({length:5}).map((_,i) => (
                  <Star key={i} size={13} className="fill-[#FACC15] text-[#FACC15]"/>
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-zinc-300 sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-7 flex items-center gap-3.5 border-t border-white/[0.05] pt-5">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-xs font-extrabold text-black shadow-lg`}
                  style={{fontFamily:"'Space Grotesk',sans-serif"}}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
