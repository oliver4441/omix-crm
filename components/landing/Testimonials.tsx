"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { stagger, fadeUp } from "./motion"
import { testimonials } from "./content"

export function Testimonials() {
  return (
    <section className="border-t border-white/[0.05] py-20 sm:py-[100px] lg:py-[140px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mb-16 sm:mb-20">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FACC15]">Testimonials</p>
          <h2 className="mt-5 max-w-[420px] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Trusted by teams across Kenya
          </h2>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid gap-6 md:grid-cols-3">
          {testimonials.map(t => (
            <motion.div key={t.name} variants={fadeUp} whileHover={{y:-6}}
              className="group flex flex-col rounded-[20px] border border-white/[0.06] bg-[#111111] p-8 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#181818] sm:p-9">
              {/* Stars */}
              <div className="flex gap-1 mb-7">
                {Array.from({length:5}).map((_,i) => (
                  <Star key={i} size={14} className="fill-[#FACC15] text-[#FACC15]"/>
                ))}
              </div>
              {/* Quote */}
              <p className="flex-1 text-[17px] leading-[1.75] text-[#A3A3A3]">&ldquo;{t.quote}&rdquo;</p>
              {/* Author */}
              <div className="mt-8 flex items-center gap-4 border-t border-white/[0.06] pt-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[13px] font-bold text-white">{t.init}</div>
                <div>
                  <p className="text-[15px] font-semibold text-white">{t.name}</p>
                  <p className="mt-0.5 text-[13px] text-[#525252]">{t.role} · {t.co}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
