"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { stagger, fadeUp } from "./motion"
import { testimonials } from "./content"

export function Testimonials() {
  return (
    <section className="border-t border-white/[0.06] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Heading */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mb-16 sm:mb-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#FACC15]">Testimonials</p>
          <h2 className="mt-5 max-w-[440px] text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Trusted by teams across Kenya
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {testimonials.map(t => (
            <motion.div key={t.name} variants={fadeUp} whileHover={{y:-5}}
              className="group flex flex-col rounded-[20px] border border-white/[0.06] bg-[#111111] p-8 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#171717]">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({length:5}).map((_,i) => (
                  <Star key={i} size={14} className="fill-[#FACC15] text-[#FACC15] opacity-90"/>
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-[16px] leading-[1.7] text-[#A1A1AA]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-7 flex items-center gap-3.5 border-t border-white/[0.06] pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-[12px] font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white">{t.name}</p>
                  <p className="text-[13px] text-zinc-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
