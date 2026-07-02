"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { faqs } from "./content"
import { fadeUp } from "./motion"

export function FAQ() {
  const [open, setOpen] = useState<number|null>(0)

  return (
    <section id="faq" className="border-t border-white/[0.06] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-24">
          {/* Left — sticky label */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
            className="lg:col-span-2">
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#FACC15]">FAQ</p>
            <h2 className="mt-5 text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
              Questions,<br/>
              <span className="text-zinc-500">answered.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-zinc-500">
              Still have questions?{" "}
              <a href="mailto:hello@omixcrm.com" className="text-white underline underline-offset-4 hover:text-[#FACC15]">
                hello@omixcrm.com
              </a>
            </p>
          </motion.div>

          {/* Right — accordion */}
          <div className="lg:col-span-3">
            <div className="divide-y divide-white/[0.06]">
              {faqs.map((f, i) => {
                const isOpen = open === i
                return (
                  <div key={f.q}>
                    <button type="button" onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-8 py-6 text-left">
                      <span className={`text-[16px] font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-white" : "text-zinc-400"}`}>
                        {f.q}
                      </span>
                      <motion.span animate={{rotate: isOpen ? 45 : 0}}
                        transition={{duration:0.2, ease:[0.25,0.1,0.25,1]}}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                          isOpen
                            ? "border-[#FACC15]/25 bg-[#FACC15]/[0.08] text-[#FACC15]"
                            : "border-white/[0.08] text-zinc-600"
                        }`}>
                        <Plus size={14}/>
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div key="body"
                          initial={{height:0, opacity:0}}
                          animate={{height:"auto", opacity:1}}
                          exit={{height:0, opacity:0}}
                          transition={{duration:0.22, ease:[0.25,0.1,0.25,1]}}
                          className="overflow-hidden">
                          <p className="pb-6 text-[16px] leading-[1.75] text-[#A1A1AA]">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
